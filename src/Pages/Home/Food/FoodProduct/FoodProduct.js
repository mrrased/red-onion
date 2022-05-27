import React , { useState } from 'react';
import { addToDb } from '../../../../utilities/databaseManager';
import CheckOut from '../../../../Component/CheckOut/CheckOut';
import Food from '../Food/Food';
import useAuth from '../../../../Hooks/useAuth';

const FoodProduct = () => {

    // const fakeFood = fakeData.slice(0,18);
    const {foods} = useAuth();
    // const [food, setFood] = useState(fakeFood);
    const [cart, setCart] = useState([]);


    const handleAddFood = (food) =>{
        const newFood = [...cart, food];
        setCart(newFood);

        const sameFood = newFood.filter(filterFood => filterFood.key === food.key);
        const count = sameFood.length;
        addToDb(food.key, count);
    }
    
    return (
        <section className="container">
                <div className="row">
                {
                    foods.map(food => <Food 
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