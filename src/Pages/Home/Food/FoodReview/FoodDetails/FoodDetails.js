import React from 'react';
import './FoodDetails.css';

const FoodDetails = (props) => {

    const {name, description, img, price, key} = props.food;
    return (
        <div className="container reviewStyle">
            <div className="row">
                <div className="col-md-6 detailStyle">
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <div className="plusMinus">
                        <h3 className="">$ {price}</h3>
                    
                        <div className="d-flex align-items-center incrementDecrement">
                        <span className="minus"> -</span> 
                        <span className="increment">1</span>
                        <span className="plus"> +</span>
                        </div>
                    </div>
                    <button onClick={() =>props.history.push('/login')}>Add</button>
                    {/* <button onClick={() => props.handleAddFood(props.food)} >Add</button> */}
                    <button onClick={() =>props.handleRemoveFood(key)}>Remove</button>
                </div>
                <div className="col-md-6">
                    <img className="w-100" src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;