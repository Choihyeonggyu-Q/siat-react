import React from "react";

function LogInBtn(props){
    const loginHandler = (setisLoggedIn) =>{
        console.log("debug >> loginHandler");
        setisLoggedIn(true);
    }

    return (
        <button onClick={() => loginHandler(props.isLogin)}>
            로그인
        </button>
    );
}

export default LogInBtn;