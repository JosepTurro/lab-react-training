import React from "react";

function Random({min, max}){ 
    // console.log("last name bbb: ", lastName)
    let numRandom = Math.floor(Math.random() * max)+min
     return (
        <div className="Random">
            <p>Random value between {min} y {max} = {numRandom}</p>
            
        </div>
     );
};

export default Random;