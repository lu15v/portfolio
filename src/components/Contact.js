import React from 'react';
import SquaredLink from './SquaredLink';
import '../styles/contact.scss';

const Contact = () =>{

    return(
        <div id="menu-grid" className="menu-grid-container">
            <div className="menu-elements">
                <SquaredLink styles="linkedIn"  name="LinkedIn" url="https://www.linkedin.com/in/luis-ballinas/"/>
                <SquaredLink styles="mail" name="Mail" url="mailto:luis.ed.ballinas@gmail.com"/>
                <SquaredLink styles="github" name="GitHub" url="https://github.com/lu15v"/>
                <SquaredLink styles="old-site" name="Old Site" url="https://rasanod.com"/>
                <SquaredLink styles="instagram" name="Instagram" url="https://www.instagram.com/lu15v/"/>
                <SquaredLink styles="whats" name="whats" url="https://wa.me/525516609794"/>
            </div>
        </div>
    )

}
// https://wa.me/525516609794
export default Contact;