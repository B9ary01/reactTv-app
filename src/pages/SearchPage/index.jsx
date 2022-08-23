import React, { useState,useEffect } from "react";
import axios from "axios";

import {ShowCard, SearchForm,Header} from "../../components";


const SearchPage=()=>{
    
    
const [showData, setshowData]=useState([]);
const [searchString, setSearchString]= useState("Friends");
const [isLoading, setIsLoading]=useState(true);

useEffect(() => {
    async function searchApi(){
        setIsLoading(true);
        const result=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`)
     setshowData(result.data);
     setIsLoading(false);
    }
    searchApi();

}, [searchString]);
   

function handleSearch(userInput){
    setSearchString(userInput);

}


    return(
        <>
        <Header />
         <SearchForm handleSearchSubmission={handleSearch}/>

     {isLoading ? <em>loading...</em> : showData.map(d =><ShowCard key={d["show"]["id"]} data={d["show"]} />)}


        </>
        )
}

export default SearchPage;