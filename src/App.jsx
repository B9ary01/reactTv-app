import React, { useState,useEffect } from "react";
import ShowCard from "./components/ShowCard";
import axios from "axios";
import"./App.css"

const App=()=>{
    
const [showData, setshowData]=useState([])


useEffect(() => {
    async function searchApi(){
        const result=await axios.get("https://api.tvmaze.com/search/shows?q=girls")
     setshowData(result.data);
    }
    searchApi();

}, []);
   


    return(
        <>
     {showData.map(d =><ShowCard key={d["show"].id} data={d["show"]} />)}

        </>
        )
}

export default App;