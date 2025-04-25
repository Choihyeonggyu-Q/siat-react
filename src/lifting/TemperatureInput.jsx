import React from "react";

function TemperatureInput(props){
    const changeHandler = (event) =>{
        console.log("debug > changeHandler");
        props.handler(event.target.value);
    }

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위: {props.scale})
            </legend>
            <input value={props.temperature} onChange={changeHandler}/>
        </fieldset>

    );
}

export default TemperatureInput;