import React,{useState, useEffect} from 'react';
import { withRouter } from 'react-router';
import {mode as savedMode} from '../util/recoil-atoms';
import { useRecoilValue } from 'recoil';
import { pictureLoaded } from '../util/pictureloaded';

import '../styles/project.scss';

const Project = (props) =>{
    const {name, background, history, projectN} = props;

    const [isHovering, setIsHovering] = useState();
    const [isPictureLoaded, setIsPictureLoaded] = useState(false);
    const [loadingError, setLoadingError] = useState(false);

    useEffect(() =>{
        pictureLoaded(background).then(isLoaded => {
            setIsPictureLoaded(isLoaded);
        }).catch(() => {
            setLoadingError(true);
        })
    }, [])

    const mode = useRecoilValue(savedMode);

    const validName = name || 'Unknown';

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleOnClick = () =>{
        history.push(`/${name.replaceAll(" ", "_")}/${projectN}`)
    }
    
    if(isPictureLoaded){
        return(
            <div className={`${mode} item`} style={{backgroundImage: `url(${background})`}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick} >
           <div className={isHovering ? "hover-wrapper-item showUp" : "hover-wrapper-item"}>
                <div className="hover-content">
                    <h3>{validName}</h3>
                </div>
            </div>
        </div>
        )
    }else if(!isPictureLoaded && loadingError){
        return(
            <div className={`${mode} item`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick} >
           <div className="hover-wrapper-item showUp">
                <div className="hover-content">
                    <h3>{validName}</h3>
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className="div.item-skeleton">
            </div>
        )
    }
}

export default withRouter(Project);