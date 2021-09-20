import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/squaredLink.scss';


const SquaredLink = (props) =>{
    const {styles, linkTo, name, url} = props;

    return(
        <div className={styles}>
            {url ?
                <a target="_blank" rel="noreferrer" className="link" href={url}>{name}</a>
                :
                <NavLink className="link" to={linkTo}>{name}</NavLink>
            }
        </div>
    )
}

export default SquaredLink;