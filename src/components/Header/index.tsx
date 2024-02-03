import React from 'react';
import img from '../../img/image 2.png';
import { NavLink } from 'react-router-dom';
import './index.scss';
const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={img} alt="" />
                    <div className="block">
                        <NavLink to='/'>Menu</NavLink>
                        <NavLink to='/orders'>Orders</NavLink>
                        <NavLink to='/admin'>Admin</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;