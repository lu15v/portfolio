import React from 'react';

import '../styles/mainPage.scss';

const MainPage = () =>{

    return(
        <div className="hero mainPage-container">
            <div id="content">
                <div id="primary" className="wrapper">
                    <main id="main" className="grid">
                        <div id="menu-grid" className="menu-grid-container">
                            <div className="menu-elements">
                                <div className="portfolio">
                                </div>
                                <div className="about">
                                </div>
                                <div className="contact">
                                </div>
                                <div className="old-site">
                                </div>
                                <div className="resume">
                                </div>
                                
                                
                                {/* <div className="about">
                                </div>
                                <div className="contact">
                                </div> */}
                                {/* <div className="resume">
                                </div>
                                 */}
                            </div>
                        </div>

                    </main>
                    {/* <div className="column1"></div>
                    <div className="column2">
                        <div className="button2">

                        </div>
                        <div className="button3">

                        </div>
                    </div>
                    <div className="column3">

                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default MainPage;