import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => {
    return (
        <div>
            <nav className=" MenuStyle d-flex justify-content-center">
                <NavLink to="/home/menu/breakfast">Breakfast</NavLink>
                <NavLink to="/home/menu/lunch">Lunch</NavLink>
                <NavLink to="/home/menu/dinner">Dinner</NavLink>
                <NavLink to="/home/menu/all" className="text-right">All</NavLink>
            </nav>
            <Outlet/>
        </div>
    );
};

export default MenuBar;