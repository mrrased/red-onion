import React from 'react';
import { 
    NavLink, 
    Outlet , 
    useMatch , 
    useResolvedPath
} from 'react-router-dom';

import './MenuBar.css';

const MenuBar = () => {

    let activeStyle = {
        
        borderBottom: '4px solid crimson',
        color: 'crimson',
        fontWeight: 'bold'
    };


    
    
    // let resolved = useResolvedPath(to);
    // let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <nav className=" MenuStyle d-flex justify-content-center">
                <NavLink 
                    to="/home/menu/breakfast"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >Breakfast</NavLink>
                <NavLink 
                    defaultChecked
                    to="/home/menu/lunch"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >Lunch</NavLink>
                <NavLink 
                    to="/home/menu/dinner"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >Dinner</NavLink>
                <NavLink 
                    to="/home/menu/all" 
                    className="text-right"
                
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >All</NavLink>
            </nav>
            <Outlet/>
        </div>
    );
};

export default MenuBar;