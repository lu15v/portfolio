import React from 'react';
import Me from '../assets/me2.jpg';

import '../styles/about.scss';


const About = () =>{



    return(
        // <div className="about-wrapper">
        //     <h1>About</h1>
            <div className="about-content">
                <div className="about-information">
                    <div className="name-wrapper">
                        <p className="name animated-text"><span>{"<"}</span><span>L</span>uis_<span>B</span>allinas<span>{">"}</span></p>
                    </div>
                    {/* <h3>"Work until you no longer have to introduce yourself"</h3> */}
                    <p className="greeting show">Hola <span className="emoji">👋</span></p>
                    <p className="show">I’m a UI developer with a passion for creating interfaces that will ease people's lives around the world.</p>
                    <p className="show">I love to: contribute, learn, teach and in general be very engaged in every project I'm in, providing the highest possible quality in every development.</p>
                    <p className="show">In my free time, I enjoy: learning topics related to web development, playing the ukulele, watching series, writing, reading novels, playing video games and developing custom personal websites.</p>
                    <p className="show">I love and I'm looking forward to being part of teams, where I can learn, grow, and share my knowledge with others. Besides, contribute in challenging projects with: high relevance and impact.</p>
                    <p className="show">Thanks for stopping by! You can take a look to my resume as well</p>
                    <div className="resume-container">
                        <a className="show" href="https://drive.google.com/file/d/1bUylek6xWYc7VSrBzA_wfUnfqDsBiT3K/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                </div>
                <div className="about-photo">
                    <img className="show" src={Me} alt="Me"/>
                </div>
            </div>
        // </div>
    )

}

export default About;