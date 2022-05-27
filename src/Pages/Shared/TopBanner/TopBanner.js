import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <section className="bannerStyle">
                <div className="container">
                    <div className="row">
                        <div className="col text-center banner-content">
                            <h2>Best Food waiting for Your Belly</h2>
                            <div className="search-box">
                            <input className="" type="text" name="search" id="search" placeholder="Search Food item"/>
                            <button className=" btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default TopBanner;