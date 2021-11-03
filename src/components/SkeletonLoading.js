import React from 'react';
import uniqid from 'uniqid';

import '../styles/skeletonLoading.scss';

const SkeletonLoading = (props) =>{
    const {children, items = 1, styles = {}} = props;

    return(
        <>
            {
                [...Array(items)].map(value =>{
                return(
                    <div key={uniqid()} className={"skeleton"} style={styles}>
                        {children}
                    </div>)
                })
            }
        </>
    )
};

export default SkeletonLoading;