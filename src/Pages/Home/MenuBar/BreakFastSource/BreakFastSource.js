import React from 'react';
import { useState , useEffect} from 'react';
import BreakFast from '../BreakFast/BreakFast';
import { addToDb } from '../../../../utilities/databaseManager';
import CheckOut from '../../../../Component/CheckOut/CheckOut';
import useAuth from '../../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const BreakFastSource = () => {
    // const breakeFastFood = fakeData.slice(12, 18);
    const [breakFast , setBreakFast] = useState([]);
    const [cart, setCart] = useState([]);
    const { foods, process } = useAuth();
    
    console.log(foods);

    useEffect(()=>{
      const existingFood =  foods.filter(food => food.category === 'breakfast')
            setBreakFast(existingFood);
    },[foods])

    const handleAddFood = (breakFast) => {
        const newCart = [...cart, breakFast];
        setCart(newCart);
        const sameFood = newCart.filter(food => food.key === breakFast.key);
        const count = sameFood.length;
        addToDb(breakFast.key, count);
         
       
    }
    return (
        <div className="container">
            { process? <Box sx={{textAlign: 'center'}}><CircularProgress color="success" /></Box> : <div className="row">
                {
                    breakFast.map(breakFast => <BreakFast
                         key = {breakFast.key}
                         handleAddFood = {handleAddFood}
                         breakFast={breakFast}>

                         </BreakFast>)
                }
                {
                    <CheckOut cart={cart}></CheckOut>
                }
            </div>}
        </div>
    );
};

export default BreakFastSource;