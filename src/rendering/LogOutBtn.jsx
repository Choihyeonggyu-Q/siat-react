import React from "react";

function LogOutBtn(props){
    const logoutHandler = (setisLoggedIn) =>{
        console.log("debug >> logoutHandler");
        setisLoggedIn(false);
    }
    return (
        <button onClick={() => logoutHandler(props.isLogin)}>
            로그아웃
        </button>
    );
}

export default LogOutBtn;