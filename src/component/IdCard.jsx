import React from "react";

function IdCard({lastName, firstName, gender, height, birth, picture}){ // això és destructuring i és això const {lastNAme, firstName, gender, height, birthl, picture}=props
    console.log("last name bbb: ", lastName)
    
     return (
        <div className="IdCard">
             <img src={picture} alt="Foto usuari" className="imgUsuari" />
            <ul className="textUsuari">
                <ls><p><span>First name :</span>{firstName}</p></ls>
                <ls><p><span>Last name: </span>{lastName}</p></ls>
                <ls><p><span>Gender: </span>{gender}</p></ls>
                <ls><p><span>Height: </span>{height}</p></ls>
                <ls><p><span>Birth: </span>{birth.toDateString()}</p></ls> 
            </ul>
           

        </div>
     );
};

export default IdCard;

//linea 14 parem atenció Date és una classe nativa de javaScript. objecte ---> string = toDateString() 