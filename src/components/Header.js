import React,{useEffect, useState} from 'react';
import {NavLink, withRouter, useLocation} from 'react-router-dom';
import useWindowDimensions from '../hooks/windowDImentions';
import {mode as savedMode} from '../util/recoil-atoms';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import BurgerMenu from './burgerMenu';
import picture from '../assets/logo.png';
import menu from '../assets/icons/burger-icon.png';
import '../styles/header.scss';

const Header = ({history}) =>{
    const {pathname} = useLocation();
    const [activePath, setActivePath] = useState('');
    const [displayMenu, setDisplayMenu] = useState(false);
    const setMode = useSetRecoilState(savedMode);
    const mode = useRecoilValue(savedMode);
    const modeLabel = mode === 'light' ? 'Dark Mode' : 'Light Mode';

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

    const formatLink = (linkName) => {
        return(
            <p>{'{'}<span>{linkName.substring(0,1)}</span>{linkName.substring(1)}{'}'}</p>
        )
    }

    return(
        <>
            {displayMenu && <BurgerMenu callback={setDisplayMenu}/>}
            <header className={mode === 'dark' ? "site-header-dark" : "site-header"}>
                <div className="header-wrapper">
                    <div className="header-content">
                        <img id="logo"  className="logo" onClick={redirectHome} src={picture} alt="logo"/>
                        <div className="navbar-wrapper">
                            {width > 900 ? (
                            <>
                            <NavLink className={mode} to="/about">{activePath === '/about' ? formatLink("About"): "About"}</NavLink>
                            <NavLink className={mode} to="/contact">{activePath === '/contact' ? formatLink("Contact") : "Contact"}</NavLink>
                            <a className={mode} id="dark-mode" onClick={handleClick}>{modeLabel}</a>
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