import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/burgerMenu.scss';
import close from '../assets/icons/close.png';

const BurgerMenu = ({callback}) =>{
    const [mode, setMode] = useState(localStorage.getItem('mode'));

    const handleClick = () =>{
        if(mode === 'light'){
            localStorage.setItem('mode', 'dark');
        }else{
            localStorage.setItem('mode', 'light');
        }
        setMode(localStorage.getItem('mode'));
    }
    

    return(
        <div className="burgerMenu-wrapper" onClick={() => callback(false)}>
            <img id="close" src={close}  onClick={() => callback(false)} alt="close"/>
            
            <NavLink id="about" to="/about">About</NavLink>
            <NavLink id="contact" to="/contact">Contact</NavLink>
            <a id="dark-mode" onClick={handleClick}>Dark Mode</a>
            {/* <NavLink id="resume" to="/resume">Resume</NavLink> */}
        </div>
    )
}

export default BurgerMenu;