import React, { useState } from 'react';
import Food from '../Food/Food';
import fakeData from '../../fakeData';
import './FoodProduct.css';
import CheckOut from '../CheckOut/CheckOut';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const FoodProduct = () => {
 const fakeFood = fakeData.slice(0,18);
 const [food] = useState(fakeFood);

const [cart, setCart] = useState([]);

const handleAddFood = (food) =>{
    const newFood = [...cart, food];
    setCart(newFood);

    const sameFood = newFood.filter(filterFood => filterFood.key === food.key);
    const count = sameFood.length;
    addToDatabaseCart(food.key, count);
}
    return (
     <section className="container">
                <div className="row">
                {
                    food.map(food => <Food 
                        key={food.key}
                        handleAddFood={handleAddFood}
                        food={food}
                        >

                        </Food>)
                }
                {
                    <CheckOut cart={cart}></CheckOut>
                }
                
                </div>
                
     </section>
    );
};

export default FoodProduct;