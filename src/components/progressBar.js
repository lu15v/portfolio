import React from 'react';
import '../styles/progressBar.scss';


const ProgressBar = ({percentage = 0}) =>{

    const styles ={
        width: `${percentage}%`
    }

    return(
        <div className="meter show">
            <div className="meter-circle-container" style={styles}>
                <span></span>
            </div>
        </div>
    )
}

export default ProgressBar;