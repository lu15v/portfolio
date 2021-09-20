import React from 'react';
import Header from './Header';
import {Switch, Route} from 'react-router-dom';
import MainPage from './MainPage';
import Projects from './Projects';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import { withRouter } from "react-router-dom";

import '../styles/pageWrapper.scss';



const PageWrapper = () =>{
    return(
        <div className="hero page-wrapper-container">
            <div id="content">
                <div id="primary" className="wrapper">
                    <Header/>
                    <main id="main" className="grid">
                            <Switch>
                                <Route exact path='/' component={MainPage} />
                                <Route exact path='/portfolio' component={Projects} />
                                <Route path='/portfolio/:item' component={Project} />
                                <Route path='/contact' component={Contact} />
                                <Route path='/about' component={About} />
                                <Route path='/resume' component={Resume} />
                                <Route component={NotFound} />
                            </Switch>
                    </main>
                </div>
            </div>
    </div>
    );
}

export default withRouter(PageWrapper);