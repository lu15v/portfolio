import React,{useEffect, useState} from 'react';
import { GET_PROJECT } from '../util/fetch';
import { useLazyQuery } from '@apollo/client';
import SkeletonLoading from './SkeletonLoading';
import uniqid from 'uniqid';
import { Redirect, useParams } from 'react-router';
import ProgressBar from './progressBar';
import ZoomImage from './ZoomImage';

import play from '../assets/play.png';
import notPlay from '../assets/not_play.png';
import next from '../assets/next.png';
import before from '../assets/before.png';

import '../styles/projectDetail.scss';

const ProjectDetail = ({history}) =>{
    const [getProject, {error,loading, data}] = useLazyQuery(GET_PROJECT);
    const [isZoomActive, setIsZoomActive] = useState(false);

    let { item, range } = useParams();

    const [idx, max] = range.split("_");
    const percentage = (idx / max) * 100;

    const handleFollowingProject = (projectName, idx, limit) =>{
        if(idx > limit){
            idx = 1;
        }

        if(idx < 1){
            idx = limit;
        }

        history.push(`/${projectName.replaceAll(" ", "_")}/${idx}_${limit}`)
    }

    useEffect(() => {
        getProject({
            variables: {name: item.replaceAll("_", " ")}
        });
    }, [item])
    

    const zoomPicture = () =>{
        setIsZoomActive(true);
    }

    if(error){
        if(error.networkError){
            return <Redirect to={{
                        pathname: '/not_found',
                        state: { code: error.networkError.response.status, message: "a Problem occurred when trying to load this project. Please try again. If the problem persists, check my old portfolio, in the Contact window." }
                    }}
                    />
        }
        return <Redirect to={{
            pathname: '/not_found',
            state: { code: 404, message: "The project was not found. Please try with a valid one. If the problem persists, check my old portfolio, in the Contact window." }
        }}
        />
    }

    return(
        <div className="detail-wrapper">
            {isZoomActive && data && data.getProject && <ZoomImage linkToPicture={`https://${data.getProject.mainPicture}`} handleClose={setIsZoomActive}/>}
            <div className="project-desc-container">
                <div className="project-information">
                    <div className="description">
                        <div className="project-name">
                            {!loading  && data && data.getProject ? (
                                <img className="show" src={`https://${data.getProject.pictureName}`} alt="project name"/>
                            ) :
                            <SkeletonLoading styles={{height: '90px', width: '170px'}}/>}
                        </div>
                        {!loading  && data && data.getProject  ? (
                        <>
                            <p className="show">about the project</p>
                            <article className="show">
                            {data.getProject.description}
                            </article>
                        </>
                            
                        ): (
                        <>
                            <br/>
                            <SkeletonLoading styles={{height: '10px'}}/>
                            <br/>
                            <div id="skeleton-article">
                                <SkeletonLoading styles={{height: '100px'}}/>
                            </div>
                        </>
                        )
                        }
                    </div>
                    <div className="project-photo">
                        {!loading  && data && data.getProject ? (
                            <img className="show" src={`https://${data.getProject.mainPicture}`} alt={data.getProject.name} title={data.getProject.name} onClick={zoomPicture}/>

                        ):(
                            <SkeletonLoading styles={{width: '500px'}}/>
                        )
                        }
                    </div>
                </div>
                <div className="project-navigation">
                    
                    {!loading  && data && data.getProject ? <ProgressBar percentage={percentage}/> : <SkeletonLoading items={1} styles={{height: '2px', width: '100%'}}/>}
                    <br/>
                    <div className="navigation-buttons">
                        {!loading  && data && data.getProject  ? (
                            <>
                                <img className="show" src={before} id="Before" alt="Before" onClick={() => handleFollowingProject(data.getProject.prevProject,parseInt(idx) - 1, max)}/>
                                {data.getProject.demo === '' ? 
                                <img className="show" src={notPlay} id="NotPlay" alt="NotPlay"/>
                                :
                                <a href={data.getProject.demo} rel="noopener noreferrer nofollow" target="_blank"><img className="show" src={play} id="Play" alt="Play"/></a>
                                }
                                <img className="show" src={next} id="Next" alt="Next" onClick={() => handleFollowingProject(data.getProject.nextProject, parseInt(idx) + 1, max)}/>
                            </>
                        ):(
                            <SkeletonLoading items={3} styles={{height: '65px', width: '75px'}}/>
                        )
                        }
                    </div>
                </div>
            </div>
            <div className="project-stack-container">
                <div className="stack-label-container">
                    {!loading  && data && data.getProject ? (
                        <h3 className="show">Stack</h3>
                    ) :
                        <SkeletonLoading styles={{height: '30px', width: '70px'}}/>
                    }
                </div>
                <br/>
                <div className="stack-info-container">
                    {!loading  && data && data.getProject ? (
                        <>
                           {data.getProject.stack.map(tech => {
                               return <img className={tech.name === 'MacOS' || tech.name === "Love" ? "rectangle show" :"show"} key={uniqid()} src={tech.logo} alt={tech.name} title={tech.name}/>
                           })
                           }
                       </>
                    ):(
                        <SkeletonLoading items={5} styles={{height: '70px', width: '70px'}} />
                    )
                    }
                </div>
            </div>
        </div>
    )

}

export default ProjectDetail;