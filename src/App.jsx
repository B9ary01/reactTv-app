import React, { useState,useEffect } from "react";
import axios from "axios";
import"./App.css"
import {ShowCard, SearchForm} from "./components";


const App=()=>{
    
const [showData, setshowData]=useState([]);
const [searchString, setSearchString]= useState("Friends");

useEffect(() => {
    async function searchApi(){
        const result=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`)
     setshowData(result.data);
    }
    searchApi();

}, [searchString]);
   

function handleSearch(userInput){
    setSearchString(userInput);

}


    return(
        <>
         <SearchForm handleSearchSubmission={handleSearch}/>

     {showData.map(d =><ShowCard key={d["show"].id} data={d["show"]} />)}


        </>
        )
}

export default App;