import React from 'react';
import './Header.css';
import images from'../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        
        <div>
            
                {/* <div>
                    <img src={images} alt=""/>
                    <a href="#" className="signup"> <span>Sign up</span></a>
                    <a className="text-danger" href="#">Login</a>
                    <a href="#" className="iconStyle"><FontAwesomeIcon icon={faShoppingCart} /></a>
                </div> */}
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#" ><img src={images} alt=""/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  justify-content-end " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link selltroly" href="#"><FontAwesomeIcon icon={faShoppingCart} /><span className="sr-only">(current)</span>
                                
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link signup" href="#"> <span>Sign up</span> </a>
                            </li>
                            </ul>
                        </div>
                </nav>

        </div>
                                

                
            

        
        
           
        
    );
};

export default Header;