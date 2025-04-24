import React from "react";

function LogOutBtn(props){
    return (
        <button onClick={props.handler}>
            로그아웃
        </button>
    );
}

export default LogOutBtn;