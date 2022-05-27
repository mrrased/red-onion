import React, { useEffect, useState } from 'react';
import CheckOut from '../../../../../Component/CheckOut/CheckOut';import { addToDb } from '../../../../../utilities/databaseManager';
import Lunch from '../Lunch/Lunch';
import useAuth from '../../../../../Hooks/useAuth';

const LunchSource = () => {

    // const lunchFood = fakeData.slice(0, 6);
    const {shoppingCart, foods} = useAuth();
    const [lunch , setLunch] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        const allLunchFood = foods.filter(food => food.category === 'lunch');
            setLunch(allLunchFood);
            console.log(allLunchFood);
    },[foods])

   const handleAddFood = (lunch) =>{
       const newCart = [...cart, lunch];
        setCart(newCart);
        shoppingCart(newCart);
        const sameFood = newCart.filter(food => food.key === lunch.key);
        const count = sameFood.length;
        addToDb(lunch.key, count);
       
   }
    return (
        <div>
            <div className="container">
           <div className="row">
                {
                    lunch.map(lunch => <Lunch
                        key = {lunch.key} 
                        handleAddFood = {handleAddFood}
                        lunch={lunch}
                        >
                        </Lunch>)
                }
                {
                    <CheckOut cart= {cart}></CheckOut>
                }
           </div>
        </div>
        </div>
    );
};

export default LunchSource;