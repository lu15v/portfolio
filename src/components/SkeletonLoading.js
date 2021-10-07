import React from 'react';
import '../styles/skeletonLoading.scss';


const SkeletonLoading = (props) =>{
    const {children, items = 1, styles = {}} = props;

    return(
        <>
            {
                [...Array(items)].map((value, index) =>{
                return(
                    <div key={index} className={"skeleton"} style={styles}>
                        {children}
                    </div>)
                })
            }
        </>
    )
};

export default SkeletonLoading;