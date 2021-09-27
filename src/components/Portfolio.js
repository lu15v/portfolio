import React, {useState} from 'react';
import Project from './Project';
import SkeletonLoading from './SkeletonLoading';
import '../styles/portfolio.scss';
import { withRouter } from 'react-router';

const Portfolio = () =>{
    const [loading, setLoading] = useState(true);

    return(
        loading ?(<div className="portfolio-items">
                <Project name="webtry backend"/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>):
            <div className="portfolio-items">
                <SkeletonLoading items={6}>
                    <Project isSkeleton={true}/>
                </SkeletonLoading>
            </div>
    )

}

export default withRouter(Portfolio);