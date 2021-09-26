import React,{useState} from 'react';
import '../styles/project.scss';

const Project = ({name}) =>{
    const [isHovering, setIsHovering] = useState();

    const validName = name || 'Unknown';

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    
    return(
        <div className="item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
           <div className={isHovering ? "hover-wrapper-item showUp" : "hover-wrapper-item"}>
                <div className="hover-content">
                    <h3>{validName}</h3>
                </div>
            </div>
        </div>
    )
}

export default Project;