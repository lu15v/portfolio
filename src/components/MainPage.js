import React from 'react';
import SquaredLink from './SquaredLink';

import '../styles/mainPage.scss';

const MainPage = () =>{

    return(
        <div id="menu-grid" className="menu-grid-container">
            <div className="menu-elements">
                <SquaredLink styles="portfolio" linkTo="/portfolio" name="Portfolio"/>
                <SquaredLink styles="about" linkTo="/about" name="About"/>
                <SquaredLink styles="contact" linkTo="/contact" name="Contact"/>
                <SquaredLink styles="old-site" name="Contact" url="https://rasanod.com"/>
                <SquaredLink styles="resume" linkTo="/resume" name="Resume"/>
            </div>
        </div>
    );
}

export default MainPage;