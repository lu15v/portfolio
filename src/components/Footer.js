import React from 'react';
import '../styles/footer.scss';
import {mode as savedMode} from '../util/recoil-atoms';
import {useRecoilValue } from 'recoil';

const Footer = () =>{
    const mode = useRecoilValue(savedMode);
    const year = new Date().getFullYear();
    const footer_rights = `© Luis Ballinas - ${year}. All rights reserved.`
    return(
        <div className="footer-wrapper">
            <div className="footer-content">
                <p className={mode}><span className="red">S</span><span>oftware</span> <span className="red">E</span><span>ngineer</span></p>
                <p className={mode}>{footer_rights}</p>
            </div>
        </div>
    );
}

export default Footer;