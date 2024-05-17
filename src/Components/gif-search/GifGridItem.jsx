import {saveAs} from 'file-saver';

/* eslint-disable react/prop-types */
const GifGridItem = ({title, url}) => {

    const dowloadImage = ()=>{
        saveAs(url,'image.gif')
    }

    return (
        <div className="card animate__animated animate__bounce">
            <img className="imagen" src={url} alt={title} onClick={dowloadImage}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;
