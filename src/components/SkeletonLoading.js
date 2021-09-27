import React from 'react';
import '../styles/skeletonLoading.scss';


const SkeletonLoading = (props) =>{
    const {children, items} = props;

    return(
        <>
            {
                [...Array(items)].map((value, index) =>{
                return(
                    <div key={index} className="skeleton">
                        {children}
                    </div>)
                })
            }
        </>
    )
};

export default SkeletonLoading;