import React from "react";

function LogInBtn(props){
    return (
        <button onClick={props.handler}>
            로그인
        </button>
    );
}

export default LogInBtn;