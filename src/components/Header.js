import React,{useEffect, useState} from 'react';
import {NavLink, withRouter, useLocation} from 'react-router-dom';
import useWindowDimensions from '../hooks/windowDImentions';
import BurgerMenu from './burgerMenu';
import picture from '../assets/logo.png';
import menu from '../assets/icons/burger-icon.png';
import '../styles/header.scss';

const Header = ({history}) =>{
    const {pathname} = useLocation();
    const [activePath, setActivePath] = useState('');
    const [displayMenu, setDisplayMenu] = useState(false);
    const [mode, setMode] = useState(localStorage.getItem('mode'));

    const { width} = useWindowDimensions()

    const redirectHome = () =>{
        history.push('/');
    }

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname])

    const handleClick = () =>{
        if(mode === 'light'){
            localStorage.setItem('mode', 'dark');
        }else{
            localStorage.setItem('mode', 'light');
        }
        setMode(localStorage.getItem('mode'));
    }
    
    return(
        <>
            {displayMenu && <BurgerMenu callback={setDisplayMenu}/>}
            <header className="site-header">
                <div className="header-wrapper">
                    <div className="header-content">
                        <img id="logo"  className="logo" onClick={redirectHome} src={picture} alt="logo"/>
                        <div className="navbar-wrapper">
                            {width > 900 ? (
                            <>
                            <NavLink to="/about">{activePath === '/about' ? '{About}' : "About"}</NavLink>
                            <NavLink to="/contact">{activePath === '/contact' ? '{Contact}' : "Contact"}</NavLink>
                            <a onClick={handleClick}>Dark Mode</a>
                            {/* <NavLink to="/resume">{activePath === '/resume' ? '{Resume}' : "Resume"}</NavLink> */}
                            </>
                            ) :
                            <img id="menu"  className="menu" onClick={() => setDisplayMenu(true)} src={menu} alt="logo"/>}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default withRouter(Header);