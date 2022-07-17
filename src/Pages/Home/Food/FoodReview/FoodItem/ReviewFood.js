import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb } from '../../../../../utilities/databaseManager';
import './ReviewFood.css';
import Navigation from '../../../../Shared/Navigation/Navigation';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../../Hooks/useAuth';
import Footer from '../../../../Shared/Footer/Footer';
import Fab from '@mui/material/Fab';

const ReviewFood = () => {

    // const [cart, setCart] = useState([]);
    const reviewId = useParams();
    const {foods, cart, setCart} = useAuth();
    const [food, setFood] = useState([]);
    

    // const handleRemoveFood = (foodKey) =>{
    //     // console.log('removed clicked', foodKey);
    //     const newCart = foods.filter(food => food.key !== foodKey);
    //     setCart(newCart);
    //     removeFromDatabaseCart(foodKey);
    // }

    // useEffect(() =>{
    //     //Cart
    //     const savedCart = getDatabaseCart();
    //     const FoodKeys = Object.keys(savedCart);

    // const foodCart = FoodKeys.map(key => {
    //     const food = fakeData.find(food => food.key === key);

    //     food.quantity = savedCart[key];
    //     return food;
    // });
    //     setCart(foodCart);
    // }, [])
    
    useEffect(()=>{
        const findFood = foods.find(food => food._id === reviewId.reviewId)
        setFood(findFood);
    },[foods, reviewId])
    
    // console.log(food?.name);

    const productAddToCart = (e) =>{
        e.preventDefault();
        
        const exist = cart.find(pd => pd.key === food.key);

        let newCart = [];
        if(exist){
            const otherFood = cart.filter(fd => fd.key !== food.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...otherFood, food];
        }
        else{
            food.quantity = 1;
            newCart = [...cart, food];
        }
        
        setCart(newCart);
        // console.log(newCart);
        // shoppingCart(food);
        addToDb(food.key);
        
    }
    
    return (
        <div className="review">
            <Navigation />
            {/* <h1>Total Food Order: {cart.length}</h1> */}
            
            <div className="container reviewStyle" style={{border: '1px solid crimson', padding: '20px', borderRadius: '10px', marginBottom: '50px'}}>
                <div className="row">
                    <div className="col-md-6 detailStyle d-flex align-items-center">
                            <div className=''>
                                
                                <h1>{food?.name}</h1>
                                <p>{food?.description}</p>
                                <div className="plusMinus">
                                <h3 className="">$ {food?.price}</h3>
                            
                                <div className="d-flex align-items-center incrementDecrement">
                                <span className="minus"> -</span> 
                                <span className="increment">1</span>
                                <span className="plus"> +</span>
                                </div>
                                </div>
                                {/* <button >Order</button> */}
                                <Fab variant="extended" sx={{backgroundColor: 'crimson', color: 'white', width: '40%', marginTop: '15px', ":hover ":{borderColor: 'crimson', color: 'crimson'}}} onClick={productAddToCart}>
                                Order
                                </Fab>
                                {/* <button onClick={() =>handleRemoveFood(key)}>Remove</button> */}
                                
                            </div>
                    </div>
                    <div className="col-md-6">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className="w-50" src={`data:image/jpeg;base64,${food?.img}`} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default React.memo(ReviewFood);