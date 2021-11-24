import React,{useEffect, useState} from 'react';
import { GET_PROJECT } from '../util/fetch';
import { useLazyQuery } from '@apollo/client';
import SkeletonLoading from './SkeletonLoading';
import uniqid from 'uniqid';
import { Redirect, useParams } from 'react-router';
import ProgressBar from './progressBar';
import ZoomImage from './ZoomImage';
import {mode as savedMode} from '../util/recoil-atoms';
import { useRecoilValue } from 'recoil';

import play from '../assets/play.png';
import notPlay from '../assets/not_play.png';
import next from '../assets/next.png';
import before from '../assets/before.png';
import play_white from '../assets/play-white.png';
import notPlay_white from '../assets/no_play-white.png';
import next_white from '../assets/next-white.png';
import before_white from '../assets/before-white.png';

import '../styles/projectDetail.scss';

const ProjectDetail = ({history}) =>{
    const [getProject, {error,loading, data}] = useLazyQuery(GET_PROJECT);
    const [isZoomActive, setIsZoomActive] = useState(false);
    const mode = useRecoilValue(savedMode);

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
    

    const mediaButtons = (mode) =>{
        let currentPlay = play;
        let currentBefore = before;
        let currentNotPlay = notPlay;
        let currentNext = next;

        if(mode === 'dark'){
            currentPlay = play_white;
            currentBefore = before_white;
            currentNotPlay = notPlay_white;
            currentNext = next_white;
        }
        
        return(
            <>
                <img className="show" src={currentBefore} id="Before" alt="Before" onClick={() => handleFollowingProject(data.getProject.prevProject,parseInt(idx) - 1, max)}/>
                {data.getProject.demo === '' ? 
                <img className="show" src={currentNotPlay} id="NotPlay" alt="NotPlay"/>
                :
                <a href={data.getProject.demo} rel="noopener noreferrer nofollow" target="_blank"><img className="show" src={currentPlay} id="Play" alt="Play"/></a>
                }
                <img className="show" src={currentNext} id="Next" alt="Next" onClick={() => handleFollowingProject(data.getProject.nextProject, parseInt(idx) + 1, max)}/>
            </>
        )
    }

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
                            <p className={`${mode} show`}>about the project</p>
                            <article className={`${mode} show`}>
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
                            <img className={`${mode} show`} src={`https://${data.getProject.mainPicture}`} alt={data.getProject.name} title={data.getProject.name} onClick={zoomPicture}/>
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
                            mediaButtons(mode)
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
                        <h3 className={`${mode} show`}>Stack</h3>
                    ) :
                        <SkeletonLoading styles={{height: '30px', width: '70px'}}/>
                    }
                </div>
                <br/>
                <div className="stack-info-container">
                    {!loading  && data && data.getProject ? (
                        <>
                           {data.getProject.stack.map(tech => {
                               const {logo, logo_dark_mode, name} = tech;
                               return <img className={name === 'MacOS' || name === "Love" ? "rectangle show" :"show"} key={uniqid()} src={mode === 'dark' ? logo_dark_mode : logo} alt={name} title={name}/>
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