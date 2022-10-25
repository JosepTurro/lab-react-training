import React from "react";

function Greetings({lang, children}){ // aixo es destructuring i es aixo const {llang, children}=props
    console.log("children: ",children );
    let salutacio;
     if(lang === "de" || lang ==="De" ) {salutacio = "Hallo "}
     else if(lang === "en"|| lang === "En"){salutacio="Hi "}
     else if(lang === "cat"||lang === "Cat"){salutacio= "Hola "}
     else if(lang === "fr"||lang ==="Fr"){salutacio="Bonjur "}
     

     return (
       <div className="Greetings">
            <p>{salutacio}{children}</p> 
       </div>
     );
};

export default Greetings;


// , "en", "es" or "fr"