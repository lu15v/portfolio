import React from 'react';
import SquaredLink from './SquaredLink';
import '../styles/contact.scss';

const Contact = () =>{

    return(
        <div id="menu-grid" className="menu-grid-container">
            <div className="menu-elements">
                <SquaredLink styles="portfolio" linkTo="/portfolio" name="Portfolio"/>
                <SquaredLink styles="about" linkTo="/about" name="About"/>
                <SquaredLink styles="contact" linkTo="/contact" name="Contact"/>
                <SquaredLink styles="old-site" name="Old Site" url="https://rasanod.com"/>
                <SquaredLink styles="resume" linkTo="/resume" name="Resume"/>
            </div>
        </div>
    )

}

export default Contact;