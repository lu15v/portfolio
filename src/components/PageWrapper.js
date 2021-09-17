import React from 'react';
import '../styles/pageWrapper.scss';
import Header from './Header';


const PageWrapper = (props) =>{
    return(
        <div className="hero page-wrapper-container">
            <div id="content">
                <div id="primary" className="wrapper">
                    <Header/>
                    <main id="main" className="grid">
                        {props.children}
                    </main>
                </div>
            </div>
    </div>
    );
}

export default PageWrapper;