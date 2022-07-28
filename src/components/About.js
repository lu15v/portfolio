import React,{useState} from 'react';
import uniqid from 'uniqid';
import ImageWavesLoading from './ImageWavesLoading';
import ZoomImage from './ZoomImage';
import {mode as savedMode} from '../util/recoil-atoms';
import { useRecoilValue } from 'recoil';

import Me from '../assets/me.png';
import aboutP1 from '../assets/about-photo-1.png';
import aboutP2 from '../assets/about-photo-2.png';
import aboutP3 from '../assets/about-photo-3.png';
import Mex from '../assets/icons/mex-icon-32.png';
import Location from '../assets/icons/location.ico';
import Quotes from './Quotes';
import '../styles/about.scss';

const About = () =>{
    const [isZoomActive, setIsZoomActive] = useState(false);
    const mode = useRecoilValue(savedMode);
    const [arePicsLoaded, setArePicsLoaded] = useState({
        mainPicture: false,
        firstPictureGallery: false,
        secondPictureGallery: false,
        thirdPictureGallery: false
    });

    const handleOnLoaded = (property) =>{
        let currState = {...arePicsLoaded};
        currState[property] = true;
        
        setArePicsLoaded(currState);
    }

    const [pictureLink, setPictureLink] = useState('');
    
    const handleZoom = (open, pictureLink = '') => {
        setPictureLink(pictureLink);
        setIsZoomActive(open);
    }

    return(
        <>
        {isZoomActive && <ZoomImage linkToPicture={pictureLink} handleClose={handleZoom}/>}
        <div className="about-content">
            <div className="about-information">
                <div className="name-wrapper">
                    <p className={`${mode} name animated-text`}><span className={mode}>{"<"}</span><span className={mode}>L</span>uis_<span className={mode}>B</span>allinas<span className={mode}>{">"}</span></p>
                </div>
                <p className={`${mode} greeting show`}><img className=""  src={Mex} alt="Mexico"/> Hola <span className="emoji">👋</span></p>
                <p className={`${mode} show`}>I’m a UI developer with a passion for creating interfaces that will ease people's lives around the world.</p>
                <p className={`${mode} show`}>I love to: contribute, learn, teach and in general be very engaged in every project I'm in, providing the highest possible quality in every development.</p>
                <p className={`${mode} show`}>In my free time, I enjoy: learning topics related to web development, playing the ukulele, watching series, writing, reading novels, playing video games and developing custom personal websites.</p>
                <p className={`${mode} show`}>I love and I'm looking forward to being part of teams, where I can learn, grow, and share my knowledge with others. Besides, contribute in challenging projects with: high relevance and impact.</p>
                <p className={`${mode} show`}>Thanks for stopping by! You can take a look to my resume as well.</p>
                <div className="resume-container">
                    <a className={`${mode} show`} href="https://drive.google.com/file/d/1bUylek6xWYc7VSrBzA_wfUnfqDsBiT3K/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </div>
                <Quotes mode={mode} quoteShowTime={5000}/>
            </div>
            <div className="about-photo">
                <ImageWavesLoading pictureLoaded={arePicsLoaded.mainPicture}>
                    <>
                        <img className={arePicsLoaded.mainPicture ? "show" : "hidden" } src={Me} alt="Me"  title="Me" onClick={() => handleZoom(true, Me)} onLoad={() => handleOnLoaded("mainPicture")}/>
                        <p className={arePicsLoaded.mainPicture  ? `${mode} photo-label show` : 'photo-label hidden'}><img src={Location} alt="Location"/> <span>S</span>omewhere in <span>R</span>edmond</p>
                    </>
                </ImageWavesLoading>
            </div>
        </div>
        <hr className="show" />
        <div className="small-gallery-container">
            <img className={arePicsLoaded.firstPictureGallery ? "show" : "hidden"} id="first-photo" src={aboutP1} alt="Old friends" title="WA friends" onClick={() => handleZoom(true, aboutP1)} onLoad={() => handleOnLoaded("firstPictureGallery")}/>
            <img className={arePicsLoaded.secondPictureGallery ? "show" : "hidden"} id="second-photo" src={aboutP2} alt="College friends" title="College friends" onClick={() => handleZoom(true, aboutP2)} onLoad={() => handleOnLoaded("secondPictureGallery")}/>
            <img className={arePicsLoaded.thirdPictureGallery ? "show" : "hidden"} id="third-photo" src={aboutP3} alt="GDL friends"  title="GDL friends" onClick={() => handleZoom(true, aboutP3)} onLoad={() => handleOnLoaded("thirdPictureGallery")}/>
        </div>
        <hr className="show" />
        <h3 className={`inspiration-label ${mode}`}><span>S</span>ome of my <span>i</span>nspiration</h3>
        <div className="inspiration-gallery-container">
            <div className="i_frame_wrapper">
                <iframe id={uniqid()} className="show" src="https://www.youtube.com/embed/Cj307YFAB88" title="Never give up">
                </iframe>
            </div>
            <div className="i_frame_wrapper">
                <iframe id={uniqid()} className="show" src="https://www.youtube.com/embed/CGzKnyhYDQI" title="Loving Vincent">
                </iframe>
            </div>
            <div className="i_frame_wrapper">
                <iframe id={uniqid()} className="show" src="https://www.youtube.com/embed/xrhNIU-BLZw" title="Apples design philosophy">
                </iframe>
            </div>
            <div className="i_frame_wrapper next-row">
                <iframe id={uniqid()} className="show" src="https://www.youtube.com/embed/kaSvGVhtszo" title="Abstract: Tinker">
                </iframe>
            </div>
            <div className="i_frame_wrapper next-row">
                <iframe id={uniqid()} className="show" src="https://www.youtube.com/embed/qPNiIeKMHyg" title="The Last of Us 2">
                </iframe>
            </div>
            <div className="i_frame_wrapper next-row">
                <iframe id={uniqid()} className="show" src="https://www.youtube.com/embed/emZ631PdDb0" title="Bauhaus">
                </iframe>
            </div>
        </div>
        </>
    )

}

export default About;