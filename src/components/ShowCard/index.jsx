import React from "react";

const ShowCard=({data})=>{
    return(
        <div className="show-card">
            <img src={data["image"]? data["image"]["medium"]:""}/>
            <h2>{data.status}</h2>
            <h2>{data.summary}</h2>
         

        </div>
        )
}

export default ShowCard