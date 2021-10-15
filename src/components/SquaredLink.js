import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import '../styles/squaredLink.scss';

const SquaredLink = (props) =>{
    const {styles, linkTo, name, url, history} = props;

    return(
        <div className={styles}>
            <HoverContent name={name} linkTo={linkTo} url={url} history={history}/>
        </div>
    )
}

const HoverContent = ({name, linkTo, url, history}) =>{
    const [isHovering, setIsHovering] = useState();

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
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default withRouter(SquaredLink);