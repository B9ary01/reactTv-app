import React, { useState } from "react";

const SearchForm=({handleSearchSubmission})=>{
    const [inputVal, setInputVal] = useState("");

    function handleInput(e){
        
        setInputVal(e.target.value);


    }
    function handleSubmit(e){
        e.preventDefault()
        handleSearchSubmission(inputVal)
          
        }

    return(
        <>

<form onSubmit={handleSubmit}>
    <label htmlFor="search-box">Query:</label>
<input type="text" onChange={handleInput} value={inputVal} required/>
<input type="submit"value="search"/>
</form>
        </>
    )
}

export default SearchForm