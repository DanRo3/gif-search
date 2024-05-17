import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifSearcher = () => {
    const [categorias, setCategorias] = useState(['One Piece']);

    return (
        <div className="container">
            <div className="header">
                <h1>Search your gif</h1>
                <hr />
                <AddCategory setCategorias={setCategorias}/>
                <hr />
            </div>
            <ol className="lista">
                {categorias.map(category => {
                    return (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    );
                })}
            </ol>
        </div>
    )
}

export default GifSearcher;
