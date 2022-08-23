import React from "react";

const ShowCard=({data})=>{
    return(
        <div className="show-card">
            <h2>{data.name}</h2>
            <h2>{data.status}</h2>
            <h2>{data.genre}</h2>
         

        </div>
        )
}

export default ShowCard