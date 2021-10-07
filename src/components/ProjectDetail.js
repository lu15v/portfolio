import React,{useState} from 'react';

import SkeletonLoading from './SkeletonLoading';

import Webtry from '../assets/webtry.png';
import play from '../assets/play.png';
import next from '../assets/next.png';
import before from '../assets/before.png';
import react from '../assets/icons/react.svg';

import '../styles/projectDetail.scss';

const ProjectDetail = () =>{
    const [loading, setLoading] = useState(false);
    
    return(
        <div className="detail-wrapper">
            <div className="project-desc-container">
                <div className="project-information">
                    <div className="description">
                        <div className="project-name">
                            {loading ? (
                                <SkeletonLoading items={1}>
                                    <div style={{height: '100px', width: '170px'}}></div>
                                </SkeletonLoading>
                            ) :
                            <img src="https://images.squarespace-cdn.com/content/v1/57a7de94197aeac98f8e77fc/1582042951077-CAQIV4MFBCM7TFL0B2Y8/StartUp.png" alt="project name"/>}
                        </div>
                        {loading ? (
                            <>
                            <br/>
                            <SkeletonLoading items={1}>
                            <div style={{height: '10px', width: '30px'}}></div>
                            </SkeletonLoading>
                            <br/>
                            <SkeletonLoading items={1}>
                                <div style={{height: '100px', width: '500px'}}></div>
                            </SkeletonLoading>
                        </>
                        ): (
                        <>
                            <p>about the project</p>
                            <article>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                            </article>
                        </>
                        )
                        }
                    </div>
                    <div className="project-photo">
                        {loading ? (
                            <SkeletonLoading items={1}>
                                <div style={{height: '100px', width: '500px'}}></div>
                            </SkeletonLoading>
                        ):(
                            <img src={Webtry} alt="webtry" />
                        )
                        }
                    </div>
                </div>
                <div className="project-navigation">
                    <div className="navigation-buttons">
                        {loading ? (
                            <SkeletonLoading items={3}>
                                <div style={{height: '60px', width: '60px'}}></div>
                            </SkeletonLoading>
                        ):(
                            <>
                            <img src={before} alt="Before"/>
                            <img src={play} alt="Play"/>
                            <img src={next}  alt="Next"/>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
            <div className="project-stack-container">
                <div className="stack-label-container">
                    {!loading && 
                        <h3>Stack</h3>
                    }
                </div>
                <div className="stack-info-container">
                    {loading ? (
                        <SkeletonLoading items={5}>
                            <div style={{height: '70px', width: '70px'}}></div>
                        </SkeletonLoading>
                    ):(
                        <>
                            <img src={react} alt="react" title="react"/>
                            <img src={react} alt="react" title="react"/>
                            <img src={react} alt="react" title="react"/>
                            <img src={react} alt="react" title="react"/>
                            <img src={react} alt="react" title="react"/>
                        </>
                    )

                    }
                </div>
            </div>
        </div>
    )

}

export default ProjectDetail;