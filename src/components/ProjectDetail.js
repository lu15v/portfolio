import React,{useEffect} from 'react';
import { GET_PROJECT } from '../util/fetch';
import { useLazyQuery } from '@apollo/client';
import SkeletonLoading from './SkeletonLoading';
import uniqid from 'uniqid';

import play from '../assets/play.png';
import next from '../assets/next.png';
import before from '../assets/before.png';

import '../styles/projectDetail.scss';

const ProjectDetail = ({history}) =>{

    const [getProject, {loading, data}] = useLazyQuery(GET_PROJECT);

    const handleFollowingProject = (projectName) =>{
        history.push(`/${projectName}`)
    }

    useEffect(() => {
        getProject({
            variables: {name: history.location.pathname.substring(1)}
        });
    }, [history.location.pathname.substring(1)])
    
    return(
        <div className="detail-wrapper">
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
                            <SkeletonLoading styles={{height: '100px'}}/>
                        </>
                        )
                        }
                    </div>
                    <div className="project-photo">
                        {!loading  && data && data.getProject ? (
                            <img className="show" src={`https://${data.getProject.mainPicture}`} alt={data.getProject.name} />

                        ):(
                            <SkeletonLoading styles={{width: '500px'}}/>
                        )
                        }
                    </div>
                </div>
                <div className="project-navigation">
                    <div className="navigation-buttons">
                        {!loading  && data && data.getProject  ? (
                            <>
                            <img className="show" src={before} id="Before" alt="Before" onClick={() => handleFollowingProject(data.getProject.prevProject)}/>
                            <a href={data.getProject.demo} rel="noopener noreferrer nofollow" target="_blank"><img className="show" src={play} id="Play" alt="Play"/></a>
                            <img className="show" src={next} id="Next" alt="Next" onClick={() => handleFollowingProject(data.getProject.nextProject)}/>
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
                    {loading ? (
                        <SkeletonLoading styles={{height: '30px', width: '70px'}}/>
                    ) :
                        <h3 className="show">Stack</h3>
                    }
                </div>
                {loading && <br/>}
                <div className="stack-info-container">
                    {!loading  && data && data.getProject ? (
                        <>
                           {data.getProject.stack.map(tech => {
                               return <img className="show" key={uniqid()} src={tech.logo} alt={tech.name} title={tech.name}/>
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