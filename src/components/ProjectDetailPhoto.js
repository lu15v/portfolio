import React, {useState} from 'react';
import ImageWavesLoading from './ImageWavesLoading';
import '../styles/projectDetail.scss';

const ProjectDetailPhoto = (props) => {
    const { mode, data, zoomPicture} = props;
    const [isLoaded, setIsLoaded] = useState(false);

    const handleOnload = () =>{
        setIsLoaded(true);
    }

    return(
        <ImageWavesLoading pictureLoaded={isLoaded}>
            <img className={isLoaded ? `${mode} show` : 'hidden'} src={`https://${data.getProject.mainPicture}`} alt={data.getProject.name} title={data.getProject.name} onClick={zoomPicture} onLoad={handleOnload}/>
        </ImageWavesLoading>
    );
}

export default ProjectDetailPhoto;