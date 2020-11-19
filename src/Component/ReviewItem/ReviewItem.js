import React from 'react';
import './ReviewItem.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import FoodDetails from '../FoodDetails/FoodDetails';
import { Link } from 'react-router-dom';

const ReviewItem = () => {

    const [cart, setCart] = useState([]);

    const handleRemoveFood = (foodKey) =>{
        console.log('removed clicked', foodKey);
        const newCart = cart.filter(food => food.key !== foodKey);
        setCart(newCart);
        removeFromDatabaseCart(foodKey);
    }

    useEffect(() =>{
        //Cart
        const savedCart = getDatabaseCart();
        const FoodKeys = Object.keys(savedCart);

    const foodCart = FoodKeys.map(key => {
        const food = fakeData.find(food => food.key === key);

        food.quantity = savedCart[key];
        return food;
    });
        setCart(foodCart);
    }, [])

    return (
        <div className=" review">
            {/* <h1>Total Food Order: {cart.length}</h1> */}
            {
                cart.map(food => <FoodDetails
                    handleRemoveFood={handleRemoveFood} 
                    key = {food.key}
                    food={food}></FoodDetails>)
            }
            
        </div>
        
    );
};

export default ReviewItem;