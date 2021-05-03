import React, {useState, useContext} from 'react';
import {AppContext} from './AppContext';
import logo from '../Images/site_logo.svg';
import sprite from '../Images/sprite.svg';

const Nav = () => {

    const [sidebarClosed, setSidebarClosed] = useContext(AppContext);
    
    const sidebarOpen = () => {
        setSidebarClosed(false);
    }
    return (
        <nav className="nav">
            <svg className="nav__icon" onClick={sidebarOpen}>
                <use href={sprite + "#icon-menu"} />
            </svg>
            <h1 className="nav__title">
                DCUFO | DAVIS CHAN
            </h1>
            <img src={logo} alt="site logo" className="nav__logo"/>
        </nav>
    )
}

export default Nav;
