import React from 'react';
import ProjectContainer from './ProjectContainer';
import SkeletonLoading from './SkeletonLoading';
import { withRouter, Redirect } from 'react-router';
import { useQuery } from "@apollo/react-hooks";
import {GET_PROJECTS} from "../util/fetch";
import uniqid from 'uniqid';

import '../styles/portfolio.scss';

const Portfolio = () =>{
    const {loading, error, data} = useQuery(GET_PROJECTS);

    console.log('data ', data)
    if(error){
        if(error.networkError){
            const  errorCode = error.networkError?.response?.status ?? 503;
            return <Redirect to={{
                        pathname: '/not_found',
                        state: { code: errorCode , message: "A network connection or server error ocurred when fetching the projects. Please try again. If the problem persists, check my old portfolio, in the Contact window." }
                    }}
                    />
        }
        return <Redirect to={{
            pathname: '/not_found',
            state: { code: 404, message: "An error ocurred when fetching the projects. Please try again. If the problem persists, check my old portfolio, in the Contact window." }
        }}
        />
    }
    let totalProjects = 0;

    if(!loading && data){
        totalProjects = data.getProjects.length;
    }

    return(
        !loading && data && data.getProjects ?(
            <div className="portfolio-items">
                {data.getProjects.map((project, idx) =>{
                    const isPictureLoaded = false;
                    return(<ProjectContainer name={project.name} key={uniqid()} projectN={`${idx + 1}_${totalProjects}`} background={`https://${project.coverPagePicture}`} loaded={isPictureLoaded}/>)
                })
                }
            </div>
            ):
            <div className="portfolio-items">
                <SkeletonLoading items={15}>
                    <div className="div.item-skeleton"></div>
                </SkeletonLoading>
            </div>
    )

}

export default withRouter(Portfolio);