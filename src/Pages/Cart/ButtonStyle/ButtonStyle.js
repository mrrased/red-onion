import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const ButtonStyle = () => {

    const { cart } = useAuth();

 

    const navigate = useNavigate();

            let oldPrice = 0;
            let shippingCost = 0;
            let cartQuantity = 0;
        for (const listOfFood of cart){
            
            cartQuantity = cartQuantity + listOfFood.quantity;
            oldPrice = oldPrice + listOfFood.price * listOfFood.quantity;
            shippingCost = shippingCost + listOfFood.quantity * listOfFood.shipping;

        }
        // console.log(total);
        let subTotal = oldPrice + cartQuantity;
        let total = oldPrice + cartQuantity + shippingCost;

    const GotoCheckout = (e) =>{
        e.preventDefault();

        
        navigate('/checkout');

    }
    return (
        <div>
            { cart?.length ? 
                <div>
                    <div className='row mb-2'>
                        <div className='col-md-6 ' style={{textAlign: 'center'}}>
                            <div>
                            <p>Subtotal : </p>
                            <p>Shipping : </p>
                            <div><hr /></div>
                            <h4 style={{color: 'crimson'}}>Total    :</h4>
                            </div>
                            
                        </div>
                
                        <div className='col-md-6'>
                            <p>$ {subTotal.toFixed(2)}</p>
                            <p>$ {shippingCost.toFixed(2)}</p>
                            <div> <hr /></div>
                            <h4 style={{fontWeight: '600', color: 'crimson'}}>$ {total.toFixed(2)}</h4>
                        </div>
                        </div>
                        <div style={{textAlign: 'center', marginBottom: '15px'}}>

                        <Tooltip TransitionComponent={Zoom} title="Click Here" arrow>
                        <button 
                            className='w-75 py-1'
                            style={{
                                backgroundColor: 'crimson', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '30px'
                            }}
                            onClick={GotoCheckout}
                            >Proceed to Checkout</button>
                            </Tooltip>
                        </div>
                </div>: <div style={{display: 'none'}}></div>
            }
        </div>
    );
};

export default ButtonStyle;