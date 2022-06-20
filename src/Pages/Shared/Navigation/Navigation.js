import React from 'react';
import images from'../../../images/logo2.png';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../../Hooks/useAuth';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDrawer from '../../Cart/CartDrawer/CartDrawer';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';


const Navigation = () => {
    const { user, signOutUser, cart } = useAuth();
    const [ state, setState ] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    const [ anchor, setAnchor ] = React.useState();
    const navigate = useNavigate();
    // const [cartQuantity, setCartQuantity] = useState([]);
    // const [ShoppingCart, setShoppingCart] = useState([]);
    
    
    //   useEffect(()=>{

    //     if(foods.length){
    //         const getLocalCart = getStoredCart();

    //         const storeCart = []; 

    //     for(const key in getLocalCart){
    //         // console.log(key);
    //         const addedFoods = foods.find( foodProduct => foodProduct.key === key)
            
    //         if(addedFoods){
    //             const quantity = getLocalCart[key];
    //             addedFoods.quantity = quantity;
    //             storeCart.push(addedFoods);
    //         }
    //         // storeCart.push(addedFoods);
    //     }
    //     // shopping cart quantity count
    //     // const count = storeCart.reduce((previous, storeCart) => previous + storeCart.quantity, 0);
    //     // setShoppingCart(count);
    //     setCart(storeCart);
    //     }
        
    //   },[foods, setCart]);

    
        
            
    
            //     let oldPrice = 0;
            //     let oldShippingCost = 0;
            //     // let total = 0;
                let cartQuantity = 0;
            for (const listOfFood of cart){
                // if(!listOfFood.quantity){
                //     listOfFood.quantity = 1;
                // }
                cartQuantity = cartQuantity + listOfFood.quantity;
                // console.log(cartQuantity);
                // oldPrice = oldPrice + listOfFood.price * listOfFood.quantity;
                // oldShippingCost = oldShippingCost + listOfFood.quantity * listOfFood.shipping;
            }
            // console.log(cartQuantity);
            // oldPrice = oldPrice + cartQuantity;
            // total = oldPrice + oldShippingCost;
            // setCartQuantity(cartQuantity);
            
            
            // setAddFoodAmount(total);
            
        

    //   Sign Out Function
    const handleOut = () =>{
        signOutUser();
    }

    
    // 
    
//         const stop = useCallback(() =>{
//         if(cart.length){
//             // const count = cart?.reduce((previous, cart) => console.log(previous, cart.quantity), 0);
//             const getLocalCart = getStoredCart();

//             const storeCart = []; 

//             for(const key in getLocalCart){
//                 // console.log(key);
//                 const addedFoods = foods.find( foodProduct => foodProduct.key === key)
                
//                 if(addedFoods){
//                     const quantity = getLocalCart[key];
//                     addedFoods.quantity = quantity;
//                     storeCart.push(addedFoods);
//                 }
//                 // storeCart.push(addedFoods);
                
//             }
//             setCart(storeCart);

//             let quantity = 0; 
//             for(const card of cart){
//                 if(card?.quantity !== undefined){
//                     quantity = quantity + card?.quantity;
//                     console.log(card?.quantity);
//                 }
//             }
//         // console.log(count);
//         console.log(quantity);

//     }
//     stop();
// },[cart, foods, setCart])
    
    
    // console.log(cart);
    const toggleDrawer = (anchor, open) => (event) => {
        // console.log('working');
        setAnchor(anchor);
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };


      const handleHome = (e) =>{
        e.preventDefault();

        navigate('/');
      }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#" ><img src={images} alt=""  onClick={handleHome}/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  justify-content-end " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link selltroly" href="#"><NavLink to='/dashboard'>Dashboard</NavLink></a>
                            </li>
                            <li className="nav-item ">
                            <Tooltip TransitionComponent={Zoom} title="Click Here" arrow>
                                <a className="nav-link selltroly" href='#' onClick={toggleDrawer('right', true)}><Badge  badgeContent={cartQuantity} color="success">
                                <ShoppingCartIcon />
                                </Badge>
                                </a>
                                </Tooltip>
                            </li>
                            {/* (current) */}
                            {/* <li className="nav-item">
                                {
                                    auth.user ? <a className="nav-link" href="/login">LogOut</a> :
                                    <a className="nav-link" href="/login">LogIn</a>
                                }
                            </li> */}
                            <li className="nav-item">
                                {
                                    user.email? <button 
                                        style={{color: 'white'}} 
                                        onClick={handleOut} 
                                        className="nav-link signup" 
                                    >Logout</button>: 
                                    <NavLink to="/login"
                                    ><button 
                                        style={{color: 'white'}} 
                                        className="nav-link signup" 
                                    >signIn</button></NavLink>
                                }
                             
                            </li>
                            </ul>
                        </div>
                </nav>
                <CartDrawer
                toggleDrawer={toggleDrawer}
                state={state}
                anchor={anchor}
                >   
                </CartDrawer>
        </div>
    );
};

export default React.memo(Navigation);