import React from "react";

function Random({min, max}){ 
    
 let numRandom = Math.floor(Math.random() * max)+min
     return (
        <div className="Random">
            <p>Random value between {min} y {max} = {numRandom}</p>
            
        </div>
     );
};

export default Random;