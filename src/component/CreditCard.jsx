import React from "react";

function CreditCard({type,number, expirationMonth, expirationYear,bank, owner, bgColor, color}){ 
    

    return (
        <div className="CreditCard" style={{backgroundColor:bgColor}}>
            <h2 className="a" style={{color:color}}>{type}</h2>
            <h1 className="b" style={{color:color}}>{number}</h1>
            <div className="postTarget">
                <p style={{color:color}}>{expirationMonth}/{expirationYear}       nom banc: {bank}</p>
                
                <p style={{color:color}}>{owner}</p>
                
            </div>


        </div>
     );
};

export default CreditCard ;