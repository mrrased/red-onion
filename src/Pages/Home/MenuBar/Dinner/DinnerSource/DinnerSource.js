import React, { useEffect } from 'react';
import { useState } from 'react';
import { getStoredCart, addToDb } from '../../../../../utilities/databaseManager';
import CheckOut from '../../../../../Component/CheckOut/CheckOut';
import Dinner from '../Dinner/Dinner';
import useAuth from '../../../../../Hooks/useAuth';

const DinnerSource = () => {

    // const dinnerFood = fakeData.slice(6, 12);
    const {foods} = useAuth();
    const [dinner , setDinner] = useState([]);
    const [cart, setCart] = useState([]);

    // Load food data database
    useEffect(()=>{
        const existingFood = foods.filter(food => food.category === "Dinner");
        setDinner(existingFood);
    },[foods])

    const handleAddFood = (dinner) =>{
        // console.log("Food Added", dinner);
        const newCart = [...cart, dinner];
        setCart(newCart);
        getStoredCart(newCart);
        console.log(newCart);
        const sameFood = newCart.filter(food => food.key === dinner.key);
        const count = sameFood.length;
         addToDb(dinner.key, count);
    }

    return (
        <div className="container">
            <div className="row">
                {
                    dinner.map(dinner => <Dinner
                    key = {dinner.key}
                    handleAddFood ={handleAddFood}
                     dinner={dinner}
                    ></Dinner>)
                }
                <CheckOut ></CheckOut>
                
            </div>
        </div>
    );
};

export default DinnerSource;