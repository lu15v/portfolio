import React,{useState} from 'react';
import { withRouter } from 'react-router';
import '../styles/project.scss';

const Project = ({name, background, history, isSkeleton}) =>{
    const [isHovering, setIsHovering] = useState();

    const validName = name || 'Unknown';

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleOnClick = () =>{
        history.push(`/${name}`)
    }
    
    return(
        !isSkeleton ?(<div className="item" style={{backgroundImage: `url(${background})`}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick} >
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