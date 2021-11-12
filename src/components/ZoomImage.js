import React from 'react';
import Close from '../assets/icons/close.png';

import '../styles/zoomImage.scss';


const ZoomImage = (props) => {
    const {linkToPicture, handleClose} = props;
    
    return(
        <div className="photo-wrapper">
            <div className="close-container">
                <img src={Close} alt="close"  onClick={() => handleClose(false)}/>
            </div>
            <div className="photo-container">
                    <img src={linkToPicture} alt="zoom" />
            </div>
        </div>
    )
}

export default ZoomImage;