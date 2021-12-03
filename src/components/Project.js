import React,{useState, useEffect} from 'react';
import { withRouter } from 'react-router';
import {mode as savedMode} from '../util/recoil-atoms';
import { useRecoilValue } from 'recoil';

import '../styles/project.scss';

const Project = (props) =>{
    const {name, background, history, projectN} = props;

    const [isHovering, setIsHovering] = useState();
    const [isPictureLoaded, setIsPictureLoaded] = useState();

    useEffect(() =>{
        pictureLoaded(background).then(isLoaded => {
            setIsPictureLoaded(isLoaded);
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

    const pictureLoaded = (pictureSrc) =>{
        return new Promise((resolve, reject) =>{
            let img = new Image();
            img.onload = () => resolve(true);
            img.onerror = reject
            img.src = pictureSrc;
        })
    }
    
    return(
        isPictureLoaded ?(<div className={`${mode} item`} style={{backgroundImage: `url(${background})`}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick} >
           <div className={isHovering ? "hover-wrapper-item showUp" : "hover-wrapper-item"}>
                <div className="hover-content">
                    <h3>{validName}</h3>
                </div>
            </div>
        </div>) :
        <div className="div.item-skeleton">
        </div>
    )
}

export default withRouter(Project);