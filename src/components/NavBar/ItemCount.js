import React, { useState } from "react";

const FunctionButton = ({ initialValue = 0, stock = 5}) => {
    const [value, setValue] = useState(initialValue);

    const handlerAdd = () => {
        if(value < stock) setValue((prev) => prev + 1);
        else alert("alcanzo el maximo")
    };
    
    return (
        <div className="buttons-container">
            <button className="button-add" onClick={handlerAdd}>SUMAR</button>
            <p className="value">{value}</p>
            <button className="button-sub">RESTAR</button>
        </div>
    );
};

export default FunctionButton;