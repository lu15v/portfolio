import React from 'react';
import { waveElements } from './CurtainLoading';
import "../styles/ImageWavesLoading.scss";

const ImageWavesLoading = (props) => {
    const {pictureLoaded = true, children} = props;

    return(
        <div className='project-image-container'>
            {children}
            <div className='waves-container'>
                {!pictureLoaded && waveElements(10)}
            </div>
        </div>
    )
};

export default ImageWavesLoading;