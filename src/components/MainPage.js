import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/mainPage.scss';

const MainPage = () =>{

    return(
        <div id="menu-grid" className="menu-grid-container">
            <div className="menu-elements">
                <div className="portfolio">
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </div>
                <div className="about">
                    <NavLink to="/about">About</NavLink>
                </div>
                <div className="contact">
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="old-site">
                    <a target="_blank" href="https://rasanod.com">Old site</a>
                </div>
                <div className="resume">
                    <NavLink to="/resume">Resume</NavLink>
                </div>
            </div>
        </div>
    );
}

export default MainPage;