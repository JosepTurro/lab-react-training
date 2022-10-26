import React from "react";

function BoxColor({r,g,b}){ 
    
     return (
        <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>  
            <p>rgb:{r}, {g}, {b}</p>
            
        </div>
     );
};

export default BoxColor;

//també es pot fer amb la variable