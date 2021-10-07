import React,{useState, useEffect} from 'react';

import SkeletonLoading from './SkeletonLoading';

import Webtry from '../assets/webtry.png';
import play from '../assets/play.png';
import next from '../assets/next.png';
import before from '../assets/before.png';
import react from '../assets/icons/react.svg';

import '../styles/projectDetail.scss';

const ProjectDetail = () =>{
    const [loading, setLoading] = useState(true);
    const [animationClass, setAnimationClass] = useState('show');

    const nextProject = () =>{
        setAnimationClass('remove');
    }

    const prevProject = () =>{
        setAnimationClass('remove');
    }

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        }, 2000)
    }, [])
    
    return(
        <div className="detail-wrapper">
            <div className="project-desc-container">
                <div className="project-information">
                    <div className="description">
                        <div className="project-name">
                            {loading ? (
                                <SkeletonLoading styles={{height: '90px', width: '170px'}}/>
                            ) :
                            <img className={animationClass} src="https://images.squarespace-cdn.com/content/v1/57a7de94197aeac98f8e77fc/1582042951077-CAQIV4MFBCM7TFL0B2Y8/StartUp.png" alt="project name"/>}
                        </div>
                        {loading ? (
                            <>
                                <br/>
                                <SkeletonLoading styles={{height: '10px', width: '250px'}}/>
                                <br/>
                                <SkeletonLoading styles={{height: '100px', width: '550px'}}/>
                            </>
                        ): (
                        <>
                            <p className={animationClass}>about the project</p>
                            <article className={animationClass}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                            </article>
                        </>
                        )
                        }
                    </div>
                    <div className="project-photo">
                        {loading ? (
                            <SkeletonLoading styles={{height: '300px', width: '500px'}}/>
                        ):(
                            <img className={animationClass} src={Webtry} alt="webtry" />
                        )
                        }
                    </div>
                </div>
                <div className="project-navigation">
                    <div className="navigation-buttons">
                        {loading ? (
                            <SkeletonLoading items={3} styles={{height: '65px', width: '75px'}}/>
                        ):(
                            <>
                            <img className={animationClass} src={before} id="Before" alt="Before" onClick={prevProject}/>
                            <img className={animationClass} src={play} id="Play" alt="Play"/>
                            <img className={animationClass} src={next} id="Next" alt="Next" onClick={nextProject}/>
                            </>
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
                        <h3 className={animationClass}>Stack</h3>
                    }
                </div>
                {loading && <br/>}
                <div className="stack-info-container">
                    {loading ? (
                        <SkeletonLoading items={5} styles={{height: '70px', width: '70px'}} />
                    ):(
                        <>
                            <img className={animationClass} src={react} alt="react" title="react"/>
                            <img className={animationClass} src={react} alt="react" title="react"/>
                            <img className={animationClass} src={react} alt="react" title="react"/>
                            <img className={animationClass} src={react} alt="react" title="react"/>
                            <img className={animationClass} src={react} alt="react" title="react"/>
                        </>
                    )
                    }
                </div>
            </div>
        </div>
    )

}

export default ProjectDetail;