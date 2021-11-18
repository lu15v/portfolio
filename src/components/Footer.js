import React from 'react';
import '../styles/footer.scss';
import {mode as savedMode} from '../util/recoil-atoms';
import {useRecoilValue } from 'recoil';

const Footer = () =>{
    const mode = useRecoilValue(savedMode);

    return(
        <div className="footer-wrapper">
            <div className="footer-content">
                <p className={mode}><span className="red">S</span><span>oftware</span> <span className="red">E</span><span>ngineer</span></p>
                <p className={mode}>© Luis Ballinas - 2021. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;