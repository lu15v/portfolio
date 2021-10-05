import React, {useState} from 'react';
import Project from './Project';
import SkeletonLoading from './SkeletonLoading';
import '../styles/portfolio.scss';
import { withRouter } from 'react-router';


const loadMoreButton = (message, callback) =>{
    return(
        <button onClick={callback}>{message}</button>
    )
}


const Portfolio = () =>{
    const [loading, setLoading] = useState(false);


    const handleClick = () =>{
        console.log("handleClick")
    }

    return(
        !loading ?(
        <>
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
            <div className="load-more-wrapper">
                {loadMoreButton("Load More", handleClick)}
            </div>
            </>
            ):
            <>
                <div className="portfolio-items">
                    <SkeletonLoading items={8}>
                        <Project isSkeleton={true}/>
                    </SkeletonLoading>
                </div>
                <div className="load-more-wrapper">
                    <SkeletonLoading items={1}>
                        {loadMoreButton("", )}
                    </SkeletonLoading>
                </div>
            </>
    )

}

export default withRouter(Portfolio);