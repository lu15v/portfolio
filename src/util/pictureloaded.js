export const pictureLoaded = (pictureSrc) =>{
    return new Promise((resolve, reject) =>{
        let img = new Image();
        img.onload = () => resolve(true);
        img.onerror = reject
        img.src = pictureSrc;
    })
}