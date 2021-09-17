import React from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/header.scss';

const Header = () =>{
    return(
        <header className="site-header">
            <div className="header-wrapper">
                <div className="site-header">
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Conctact</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;