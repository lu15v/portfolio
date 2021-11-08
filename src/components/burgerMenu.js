import React from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/burgerMenu.scss';
import close from '../assets/icons/close.png';

const BurgerMenu = ({callback}) =>{

    return(
        <div className="burgerMenu-wrapper" onClick={() => callback(false)}>
            <img id="close" src={close}  onClick={() => callback(false)} alt="close"/>
            
            <NavLink id="about" to="/about">About</NavLink>
            <NavLink id="contact" to="/contact">Contact</NavLink>
            {/* <NavLink id="resume" to="/resume">Resume</NavLink> */}
        </div>
    )
}

export default BurgerMenu;