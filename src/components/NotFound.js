import React from 'react';
import { Redirect } from 'react-router';

import '../styles/notFound.scss'

const NotFound = (props) =>{

    const messageComponent = (eCode = 404, message) =>{
        return(
            <div className="messageContainer">
                <h1>{eCode}</h1>
                <p>{message}</p>
            </div>
        )
    }

    if(props.location.state === undefined){
        return <Redirect to="/" />
    }

    return(
        <div className="flex-container">
            {messageComponent(props.location.state.code, props.location.state.message)}
            <div className="column white-column">
            </div>
            <div className="column yellow-column">
            </div>
            <div className="column blue-column">
            </div>
            <div className="column green-column">
            </div>
            <div className="column salmon-column">
            </div>
            <div className="column orange-column">
            </div>
            <div className="column navy-column">
            </div>
            <div className="column2 dark-blue-column">
            </div>
            <div className="column2 light-black-column">
            </div>
            <div className="column2 salmon-column">
            </div>
            <div className="column2 light-black-column">
            </div>
            <div className="column2 green-water-column"> 
            </div>
            <div className="column2 light-black-column">  
            </div>
            <div className="column2 grey-column">
            </div>
            <div className="column3 king-blue-column">
            </div>
            <div className="column3 light-grey-column">
            </div>
            <div className="column3 king-blue-column">
            </div>
            <div className="column3-last light-black-column">  
            </div>
        </div>
    )
}

export default NotFound;