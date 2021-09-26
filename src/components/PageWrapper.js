import React from 'react';
import Header from './Header';
import {Switch, Route} from 'react-router-dom';
import Projects from './Projects';
import Portfolio from './Portfolio';
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
                                <Route exact path='/' component={Portfolio} />
                                <Route exact path='/contact' component={Contact} />
                                <Route exact path='/about' component={About} />
                                <Route exact path='/resume' component={Resume} />
                                <Route exact path='/:item' component={Projects} />
                                <Route component={NotFound} />
                            </Switch>
                    </main>
                </div>
            </div>
    </div>
    );
}

export default withRouter(PageWrapper);