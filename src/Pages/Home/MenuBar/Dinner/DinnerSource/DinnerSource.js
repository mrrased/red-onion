import React, { useEffect } from 'react';
import { useState } from 'react';
import { getStoredCart, addToDb } from '../../../../../utilities/databaseManager';
import CheckOut from '../../../../../Component/CheckOut/CheckOut';
import Dinner from '../Dinner/Dinner';
import useAuth from '../../../../../Hooks/useAuth';
import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';


const data = [
    {
      src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
      title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      channel: 'Don Diablo',
      views: '396 k views',
      createdAt: 'a week ago',
      price: 10
    },
    {
      src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
      title: 'Queen - Greatest Hits',
      channel: 'Queen Official',
      views: '40 M views',
      createdAt: '3 years ago',
      price: 10
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130 M views',
      createdAt: '10 months ago',
      price: 10
    },
  ];

const DinnerSource = () => {

    // const dinnerFood = fakeData.slice(6, 12);
    const { foods, process } = useAuth();
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
            {
                process? <div className="row">{ data.map(item=>
                    <div className="col-xl-4">
                        <div className="m-4 text-center single-item" >
                            <div className="card p-4">
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'}}
                                    >
                                <Skeleton  variant="circular" width={210} height={210} /></Box>
                                <div className="card-body" >
                                    <h6 className="card-title"><Skeleton variant="text" /></h6>
                                    <p className="card-text"></p>
                                    <h4 className="price" ><Skeleton variant="text" /></h4>
                                    <Button variant="outlined" sx={{borderColor: 'white', color: 'none', ":hover ":{borderColor: 'none', color: 'none'}}}><Skeleton variant="rectangular" width={100} height={15} /></Button>
                                </div>
                            </div>
                        </div>
                    </div> )}
                </div>
                :<div className="row">
                    {
                        dinner.map(dinner => <Dinner
                        key = {dinner.key}
                        handleAddFood ={handleAddFood}
                        dinner={dinner}
                        ></Dinner>)
                    }
                    <CheckOut ></CheckOut>
                    
                </div> 
            }
        </div>
    );
};

export default DinnerSource;