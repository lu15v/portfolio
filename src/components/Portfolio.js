import React from 'react';
import Project from './Project';
import '../styles/portfolio.scss';

const Portfolio = () =>{

    return(
        <div className="portfolio-items">
            <Project name="webtry backend"/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    )

}

export default Portfolio;