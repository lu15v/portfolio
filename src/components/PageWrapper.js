import React from 'react';
import Header from './Header';
import {Switch, Route} from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import Footer from './Footer';
import { withRouter } from "react-router-dom";

import '../styles/pageWrapper.scss';



const PageWrapper = () =>{
    return(
        <div className="hero page-wrapper-container">
            <Header/>
            <div id="content">
                <div id="primary" className="wrapper">
                    <main id="main" className="grid">
                            <Switch>
                                <Route exact path='/' component={Portfolio} />
                                <Route exact path='/contact' component={Contact} />
                                <Route exact path='/about' component={About} />
                                <Route exact path='/resume' component={Resume} />
                                <Route path='/not_found' component={NotFound} />
                                <Route path='/:item' component={ProjectDetail} />
                                <Route component={NotFound} />
                            </Switch>
                    </main>
                    {/* <Footer/> */}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default withRouter(PageWrapper);