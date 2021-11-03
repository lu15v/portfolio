import React from 'react';
import Project from './Project';
import SkeletonLoading from './SkeletonLoading';
import { withRouter } from 'react-router';
import { useQuery } from "@apollo/react-hooks";
import {GET_PROJECTS} from "../util/fetch";
import uniqid from 'uniqid';

import '../styles/portfolio.scss';


const loadMoreButton = (message, callback) =>{
    return(
        <button onClick={callback}>{message}</button>
    )
}

const Portfolio = () =>{

    // const [getProjects, {loading, data}] = useLazyQuery(GET_N_PROJECTS_GEN_DESC,{
    //     variables: {first: 12, next: 0}
    // });
    const {loading, data} = useQuery(GET_PROJECTS);


    // useEffect(() =>{
    //     getProjects();
    //     console.log(loading, data)
    //     if(!loading && data){
    //         const {getNProjects} = data;
    //         console.log("wtf!!!! ", getNProjects)
    //         setProjects(getNProjects);
    //     }
    // },[])

    // const handleClick = () =>{
    //     console.log("handleClick")
    // }

    return(
        !loading && data && data.getProjects ?(
        // <>
        // <div className="portfolio-items">
        //         {projects && projects.map(project =>{
        //             return(<Project name={project.name} key={uniqid()} background={`https://${project.coverPagePicture}`}/>)
        //         })
        //         }
        //     </div>
        //     <div className="load-more-wrapper">
        //         {loadMoreButton("Load More", handleClick)}
        //     </div>
        //     </>
            <div className="portfolio-items">
                {data.getProjects.map(project =>{
                    return(<Project name={project.name} key={uniqid()} background={`https://${project.coverPagePicture}`}/>)
                })
                }
            </div>
            ):
            <div className="portfolio-items">
                <SkeletonLoading items={15}>
                    <Project isSkeleton={true}/>
                </SkeletonLoading>
            </div>
            // <>
            //     <div className="portfolio-items">
            //         <SkeletonLoading items={12}>
            //             <Project isSkeleton={true}/>
            //         </SkeletonLoading>
            //     </div>
            //     <div className="load-more-wrapper">
            //         <SkeletonLoading>
            //             {loadMoreButton("", )}
            //         </SkeletonLoading>
            //     </div>
            // </>
    )

}

export default withRouter(Portfolio);