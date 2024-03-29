import {GoogleAuthProvider ,  getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthenticationInitialize from '../Firebase/FIrebase.Init';
import { getStoredCart } from "../utilities/databaseManager";


AuthenticationInitialize();

 

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]); 
    const [foods, setFoods] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);
    const [addFoodAmount, setAddFoodAmount] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [totalCost , setTotalCost] = useState(0);
    const [process , setProcess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // const [ShoppingCart, setShoppingCart] = useState([]);
    

    const googleSignUp = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const signUpWithPassword = ( email, password, name, location, navigate) =>{

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const newUser = {email, displayName:name}
            console.log(newUser);
            setUser(newUser);
            savedUser(email, name, 'POST');
            // console.log(user)
            const destination = location?.state?.from?.pathname || '/';
            
            navigate(destination, { replace: true });
            // ...
        })
        .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        })
        .finally(() => setIsLoading(false))

    };

    // SignIn User
    const signInUser = (email , password, location, navigate) =>{

        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);

            const destination = location?.state?.from?.pathname || '/';

            navigate(destination, {replace: true});
            
            // console.log(user);
            // ...
        })
        .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage);
        })
        .finally(() => setIsLoading(false));
    }

    
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                
            } else {
                // User is signed out
                setUser({});
                // ...
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    },[auth])    
        
    
    const signOutUser = () =>{

        setIsLoading(true)
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
        // An error happened.
        })
        .finally(() => setIsLoading(false))
    }

    

        
    // const shoppingCart = (food) =>{
    //             // setCart(cart);
    //  const newCart = [...cart, food];
    //     setCart(newCart);
    //     console.log(newCart);
    //     addToDb(food.key)
        
    // }
        
    

    // Saved Login And registration user 
    const savedUser = (email, displayName, method) =>{

        const users = {email, displayName};
        fetch('https://safe-anchorage-91427.herokuapp.com/users',{
            method: method,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then()
    }

    //  Load All Food Data
    useEffect(()=>{
        setProcess(true);
        fetch('https://safe-anchorage-91427.herokuapp.com/food')
        .then(res => res.json())
        .then(data => {
            setFoods(data)
            setProcess(false);

        });
    },[])
    // console.log(cart.length);
    useEffect(()=>{
        
        if(foods.length){
            const getLocalCart = getStoredCart()

            const storeCart = []; 

        for(const key in getLocalCart){
            // console.log(key);
            const addedFoods = foods.find( foodProduct => foodProduct.key === key)
            
            if(addedFoods){
                const quantity = getLocalCart[key];
                addedFoods.quantity = quantity;
                storeCart.push(addedFoods);
            }
            // storeCart.push(addedFoods);
            
        }
        // shopping cart quantity count
        // const count = storeCart.reduce((previous, storeCart) => previous + storeCart.quantity, 0);
        
        // setCartQuantity(count);
        setCart(storeCart);
        // console.log('reloaded')
        }
        
      },[foods]);

    //   console.log(cart);
      
        
        // console.log(cart?.quantity);
        
      

    useEffect(()=>{
        
        if(cart?.length){

            let oldPrice = 0;
            let oldShippingCost = 0;
            let total = 0;
            let cartQuantity = 0;
        for (const listOfFood of cart){
            
            cartQuantity = cartQuantity + listOfFood.quantity;
            oldPrice = oldPrice + listOfFood.price * listOfFood.quantity;
            oldShippingCost = oldShippingCost + listOfFood.quantity * listOfFood.shipping;

        }
        // console.log(total);
        oldPrice = oldPrice + cartQuantity;
        total = oldPrice + oldShippingCost;
        setCartQuantity(cartQuantity);
        setAddFoodAmount(oldPrice);
        setShippingCost(oldShippingCost);
        setTotalCost(total);
        }
        // setAddFoodAmount(total);
        
    },[cart])

    // console.log(shippingCost);
    return {

        googleSignUp,
        signInUser,
        // shoppingCart,
        signUpWithPassword,
        signOutUser,
        user,
        foods,
        cart,
        addFoodAmount,
        shippingCost,
        totalCost,
        setCart,
        cartQuantity,
        process,
        isLoading
        

    }
};

export default useFirebase;