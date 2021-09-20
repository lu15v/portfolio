import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';

import '../styles/squaredLink.scss';

const SquaredLink = (props) =>{
    const {styles, linkTo, name, url} = props;

    return(
        <div className={styles}>
            <HoverContent name={name} linkTo={linkTo} url={url}/>
        </div>
    )
}

const HoverContent = ({name, linkTo, url}) =>{
    const [isHovering, setIsHovering] = useState();
    const history = useHistory();

    const handleOnClick = (linkTo, url) =>{
        linkTo && history.push(linkTo);
        url && window.open(url, "_blank");
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return(
        <div className={isHovering ? "hover-wrapper showUp" : "hover-wrapper" } onClick={() => handleOnClick(linkTo, url)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="hover-info-container">
                <div className="description">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default SquaredLink;