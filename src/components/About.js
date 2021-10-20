import React,{useState} from 'react';
import uniqid from 'uniqid';

import Me from '../assets/me.jpg';
import aboutP1 from '../assets/about-photo-1.JPG';
import aboutP2 from '../assets/about-photo-2.jpg';
import aboutP3 from '../assets/about-photo-3.JPG';

import '../styles/about.scss';

const quotes = [`“Those who can imagine anything, can create the impossible.” - Alan Turing`,
                `“I put my heart and soul into my work, and I have lost my mind in the process.” - Vicent Van Gogh`,
                `“Work until you no longer have to introduce yourself.” - `,
                `“I am always doing what I cannot do yet, in order to learn how to do it.” - Vincent Van Gogh`,
                `“I have no special talent. I am only passionately curious.” - Albert Einstein`,
                `“Imagination creates reality.” – Richard Wagner`,
                `“You can be anything you want to be, just turn yourself into anything you think that you could ever be.” - Freddie Mercury`,
                `“I would rather die of passion than of boredom.” - Vicent Van Gogh`,
                `“Learning never exhausts the mind.” - Leonardo da Vinci`,
                `“What would life be if we had no courage to attempt anything?” - Vincent Van Gogh`];


const About = () =>{
    const [quote, setQuote] = useState(0);

        setTimeout(() =>{
            if(quote === quotes.length - 1){
                setQuote(0);
            }else{
                setQuote(quote + 1);
            }
        }, 5000)

    return(
        <>
        <div className="about-content">
            <div className="about-information">
                <div className="name-wrapper">
                    <p className="name animated-text"><span>{"<"}</span><span>L</span>uis_<span>B</span>allinas<span>{">"}</span></p>
                </div>
                <p className="greeting show">Hola <span className="emoji">👋</span></p>
                <p className="show">I’m a UI developer with a passion for creating interfaces that will ease people's lives around the world.</p>
                <p className="show">I love to: contribute, learn, teach and in general be very engaged in every project I'm in, providing the highest possible quality in every development.</p>
                <p className="show">In my free time, I enjoy: learning topics related to web development, playing the ukulele, watching series, writing, reading novels, playing video games and developing custom personal websites.</p>
                <p className="show">I love and I'm looking forward to being part of teams, where I can learn, grow, and share my knowledge with others. Besides, contribute in challenging projects with: high relevance and impact.</p>
                <p className="show">Thanks for stopping by! You can take a look to my resume as well.</p>
                <div className="resume-container">
                    <a className="show" href="https://drive.google.com/file/d/1bUylek6xWYc7VSrBzA_wfUnfqDsBiT3K/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </div>
                {
                    <h3 className="show">{quotes[quote]}</h3>
                }
            </div>
            <div className="about-photo">
                <img className="show" src={Me} alt="Me"/>
                <p className="photo-label show"><span>S</span>omewhere in <span>R</span>edmond</p>
            </div>
        </div>
        <hr className="show" />
        <div className="small-gallery-container">
            <img className="show" id="first-photo" src={aboutP1} alt="Mexico city"/>
            <img className="show" id="second-photo" src={aboutP2} alt="Old friends"/>
            <img className="show" id="third-photo" src={aboutP3} alt="GDL friends"/>
        </div>
        <hr className="show" />
        <h3 className="inspiration-label"><span>S</span>ome of my <span>i</span>nspiration</h3>
        <div className="inspiration-gallery-container">
            <div className="i_frame_wrapper">
                <iframe id={uniqid()} src="https://www.youtube.com/embed/xrhNIU-BLZw" title="Apples design philosophy">
                </iframe>
            </div>
            <div className="i_frame_wrapper">
                <iframe id={uniqid()} src="https://www.youtube.com/embed/CGzKnyhYDQI" title="Loving Vincent">
                </iframe>
            </div>
            <div className="i_frame_wrapper">
                <iframe id={uniqid()} src="https://www.youtube.com/embed/qPNiIeKMHyg" title="The Last of Us 2">
                </iframe>
            </div>
            <div className="i_frame_wrapper next-row">
                <iframe id={uniqid()} src="https://www.youtube.com/embed/kaSvGVhtszo" title="Abstract: Tinker">
                </iframe>
            </div>
            <div className="i_frame_wrapper next-row">
                <iframe id={uniqid()} src="https://www.youtube.com/embed/Cj307YFAB88" title="Never give up">
                </iframe>
            </div>
            <div className="i_frame_wrapper next-row">
                <iframe id={uniqid()} src="https://www.youtube.com/embed/emZ631PdDb0" title="Bauhaus">
                </iframe>
            </div>
        </div>
        </>
    )

}

export default About;