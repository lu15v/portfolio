import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import picture from '../assets/logo.png';

import '../styles/header.scss';

const Header = ({history}) =>{
    // const {pathname} = useLocation();

    const redirectHome = () =>{
        history.push('/');
    }

    return(
        <header className="site-header">
            <div className="header-wrapper">
                <div className="header-content">
                    <img id="logo"  className="logo" onClick={redirectHome} src={picture} alt="logo"/>
                    <div className="navbar-wrapper">
                        <NavLink to="/contact">Conctact</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/resume">Resume</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default withRouter(Header);