import React, { useState } from "react";
import LogInBtn from "./LogInBtn";
import LogOutBtn from "./LogOutBtn";
import Greeting from "./Greeting";

function LogInOutCtrl(props){
    const [isLoggedIn, setisLoggedIn] = useState(false);

    // const loginHandler = () => {
    //     console.log("debug >> login Handler");
    //     setisLoggedIn(true);
    // }
    // const logoutHandler = () =>{
    //     console.log("debug >> logoutHandler");
    //     setisLoggedIn(false);
    // }

    let button;

    // if(isLoggedIn){
    //     button = <LogOutBtn handler={logoutHandler}/>
    // }else{
    //     button = <LogInBtn handler={loginHandler}/>
    // }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {/* {isLoggedIn ? <LogOutBtn handler={logoutHandler}/>
                        : <LogInBtn handler={loginHandler}/>} */}
            {isLoggedIn ? <LogOutBtn isLogin={setisLoggedIn}/>
                        : <LogInBtn isLogin={setisLoggedIn}/>}
        </div>
    );
}

export default LogInOutCtrl;