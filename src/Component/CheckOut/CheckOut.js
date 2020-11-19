import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = (props) => {
     console.log(props);
    return (
        <div className="container"
        
        >
            <div className="d-flex justify-content-center btn">
            <Link to="/Review"> <button className="checkoutBtn">check out your food  {props.cart.length}</button></Link>
                </div>           
        </div>
    );
};

export default CheckOut;