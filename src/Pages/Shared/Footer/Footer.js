import React from 'react';
import './Footer.css';
import images from '../../../images/screenshots/logo.png';

const Footer = () => {
    return (
        <section className="container contentStyle">
            <div className="row style">
                    <div className="col-md-6 col-sm-12 imgStyle">
                        <img src={images} alt=""/>
                    </div>
                    
                    <div className="col-md-6 col-sm-12 topFooterStyle">
                        <div className="col-md-6 col-sm-12  textStyle">
                            <a href="#/">About Online Food</a><br/>
                            <a href="#/">Read our blog</a><br/>
                            <a href="#/">Sign up to deliver</a><br/>
                            <a href="#/">Add your restaurant</a><br/>
                        </div>
                        <div className="col-md-6 col-sm-12 textStyle">
                            <a href="#/">Get help</a><br/>
                            <a href="#/">Read FAQs</a><br/>
                            <a href="#/">View all cities</a><br/>
                            <a href="#/">Restaurants near me</a><br/>
                        </div>
                    </div>
                </div>
                <div className="row bottomFooter">
                        <div className="col-md-6 col-sm-12 bottomFooterLeft">
                        <a  href="#/"> <small>Copyright © 2020 Online Food</small></a>
                        </div>
                       <div className="col-md-6 col-sm-12 copyright text-center bottomFooterRight">
                       <a className="p-2" href="#/">Privacy Policy</a>
                       <a className="p-2" href="#/">Terms Of Use</a>
                       <a className="p-2" href="#/">Pricing</a>
                    </div>
                </div>
       </section>
    );
};

export default Footer;