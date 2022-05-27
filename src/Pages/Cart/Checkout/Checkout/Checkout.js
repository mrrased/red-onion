import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { deleteFromDb } from '../../../../utilities/databaseManager';
import useAuth from '../../../../Hooks/useAuth';



const Checkout = ({foodList}) => {

    const {name, img, quantity, key} = foodList;
    const { cart, setCart} = useAuth();

    const deleteFoodItem = (e) =>{
        e.preventDefault();

        const existFood = cart.filter(food => food.key !== key);
        console.log(key);
        console.log('working', existFood);
        setCart(existFood);
        deleteFromDb(key);

    }

    const upgradeQuantity = (e) =>{
        const quantity = e.target.value;
        // console.log(key)
            
        const selectedValue = cart.find(fd => fd.key === key)
        // console.log(selectedValue);
        // console.log(quantity)
        let initQuantity = 0;
        if(selectedValue){
            initQuantity = initQuantity + quantity + selectedValue.quantity;
        }
        console.log('new quantity',initQuantity);

    }
    return (
        <>
        <div className="card mb-3" style={{maxWidth: "540px;", }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <div style={{textAlign: 'center'}}><img src={img} class="img-fluid rounded-start w-75" alt="..." /></div>
                </div>
                <div className="col-md-8">
                    <div className="card-body" style={{paddingBottom: '1px'}}>
                        <h6 className="card-title" style={{color: 'crimson'}}>{name}</h6>
                        <div>
                        {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
                            Open the select
                        </Button> */}
                            <div class="input-group mb-3" style={{color: 'crimson', marginBottom: '8px'}}>
                                    {/* <button className="btn btn-outline-secondary" type="button">Button</button> */}Qty: 
                                <select 
                                    className="form-select"
                                    onChange={upgradeQuantity}
                                    name=''
                                    style={{
                                        border: 'none', 
                                        color: 'crimson'
                                        }} 

                                    id="inputGroupSelect03" 
                                    aria-label="Example select with button addon">

                                    <option selected >{quantity}</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                        </div>
                        <p style={{
                            marginBottom: '2px', 
                            textAlign: 'right'
                        }}
                        ><Tooltip 
                            title="Delete" 
                            TransitionComponent={Zoom} 
                        >
                            <DeleteIcon 
                            color="disabled" 
                            onClick={deleteFoodItem}
                            />
                            </Tooltip></p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Checkout;