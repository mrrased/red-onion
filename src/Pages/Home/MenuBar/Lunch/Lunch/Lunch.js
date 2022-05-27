import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Lunch = (props) => {

    const {name, img, price, _id} = props.lunch;
    // console.log(props.lunch);
    const navigate = useNavigate();


    const reviewFood = (e) =>{
        e.preventDefault();

        navigate(`/review/${_id}`)
    }
    return (
        <div className="col-xl-4"
            
            >
                    <div className="m-4 text-center single-item" onClick={reviewFood}>
                                <div className="card p-4">
                                    <img className="card-img-top" src={img} alt=""/>
                                    <div className="card-body card-style">
                                        <h6 className="card-title">{name}</h6>
                                        <p className="card-text"></p>
                                        <h4 className="price">${price}</h4>
                                        <Button variant="outlined" sx={{borderColor: '#FF99AA', color: '#FF99AA', ":hover ":{borderColor: 'crimson', color: 'crimson'}}}>Order Now</Button>
                                    </div>
                                </div>
                    </div>
            </div>
    );
};

export default Lunch;