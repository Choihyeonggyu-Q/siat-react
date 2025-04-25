import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function Calculator(props){
    const [temperature, setTemperature] = useState(0);

    const cHandler = (temp) => {
        console.log("debug > cHandler");
        setTemperature(temp);
    }

    const fHandler = (temp) => {
        console.log("debug > fHandler");
        setTemperature(temp);
    }

    return (
        <div>
            <TemperatureInput 
                scale="c" 
                temperature={temperature}
                handler={cHandler}/>
            <TemperatureInput 
                scale="f" 
                temperature={temperature}
                handler={fHandler}/>
        </div>
    );
}
export default Calculator;