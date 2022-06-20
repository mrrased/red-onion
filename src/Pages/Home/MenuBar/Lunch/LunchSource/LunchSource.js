import React, { useEffect, useState } from 'react';
import CheckOut from '../../../../../Component/CheckOut/CheckOut';import { addToDb } from '../../../../../utilities/databaseManager';
import Lunch from '../Lunch/Lunch';
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

const LunchSource = () => {

    // const lunchFood = fakeData.slice(0, 6);
    const {shoppingCart, foods, process} = useAuth();
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

           { process? <div className="row">{ data.map(item=>
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
           
            : <div className="row">
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
           </div>}
        </div>
        </div>
    );
};

export default LunchSource;