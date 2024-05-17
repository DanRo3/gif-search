/* eslint-disable react/prop-types */
import { useFetchGifs } from "./hooks/useFetchGifs";
import Loader from "./loader";
import GifGridItem from './GifGridItem'


const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category);

    return (
        <div >
            <h3>{category}</h3>
            {loading ? <Loader /> : 
            (<div className="lista">
                {
                    data.map(img => {
                        return (<GifGridItem 
                            key={img.key}
                            {...img}
                        />)
                })}
            </div>)}
        </div>
    )
}

export default GifGrid;
