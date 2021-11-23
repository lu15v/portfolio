import React from 'react';
import {mode as savedMode} from '../util/recoil-atoms';
import { useRecoilValue } from 'recoil';

import '../styles/progressBar.scss';


const ProgressBar = ({percentage = 0}) =>{
    const mode = useRecoilValue(savedMode);

    const styles ={
        width: `${percentage}%`
    }

    return(
        <div className={`${mode} meter show`}>
            <div className="meter-circle-container" style={styles}>
                <span className={mode}></span>
            </div>
        </div>
    )
}

export default ProgressBar;