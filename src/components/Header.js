import React,{useEffect, useState} from 'react';
import {NavLink, withRouter, useLocation} from 'react-router-dom';

import picture from '../assets/logo.png';

import '../styles/header.scss';

const Header = ({history}) =>{
    const {pathname} = useLocation();
    const [activePath, setActivePath] = useState('');

    const redirectHome = () =>{
        history.push('/');
    }

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname])
    
    return(
        <header className="site-header">
            <div className="header-wrapper">
                <div className="header-content">
                    <img id="logo"  className="logo" onClick={redirectHome} src={picture} alt="logo"/>
                    <div className="navbar-wrapper">
                        <NavLink to="/about">{activePath === '/about' ? '{About}' : "About"}</NavLink>
                        <NavLink to="/contact">{activePath === '/contact' ? '{Contact}' : "Contact"}</NavLink>
                        <NavLink to="/resume">{activePath === '/resume' ? '{Resume}' : "Resume"}</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default withRouter(Header);