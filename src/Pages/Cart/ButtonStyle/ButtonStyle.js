import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const ButtonStyle = () => {

    const { shippingCost, addFoodAmount, totalCost, cart } = useAuth();

 

    const navigate = useNavigate();

    const GotoCheckout = (e) =>{
        e.preventDefault();

        
        navigate('/checkout');

    }
    return (
        <div>
            { cart?.length ? 
                <div>
                    <div className='row'>
                        <div className='col-md-6 ' style={{textAlign: 'center'}}>
                            <div>
                            <p>Subtotal : </p>
                            <p>Shipping : </p>
                            <div><hr /></div>
                            <p>Total    :</p>
                            </div>
                            
                        </div>
                
                        <div className='col-md-6'>
                            <p>$</p>
                            <p>$</p>
                            <div> <hr /></div>
                            <p style={{fontWeight: '600'}}>$</p>
                        </div>
                        </div>
                        <div style={{textAlign: 'center', marginBottom: '15px'}}>
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
                        </div>
                </div>: <div style={{display: 'none'}}></div>
            }
        </div>
    );
};

export default ButtonStyle;