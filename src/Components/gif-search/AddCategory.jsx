import { useState } from "react"


// eslint-disable-next-line react/prop-types
const AddCategory = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategorias(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                className="input"
                type="text"
                value={inputValue}
                placeholder="Add category"
                onChange={handleInputChange} />
        </form>
    )
}

export default AddCategory;
