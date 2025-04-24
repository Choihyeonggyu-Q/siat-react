import React, { useState } from "react";
import LogInBtn from "./LogInBtn";
import LogOutBtn from "./LogOutBtn";
import Greeting from "./Greeting";

function LogInOutCtrl(props){
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const loginHandler = () => {
        setisLoggedIn(true);
    }
    const logoutHandler = () =>{
        setisLoggedIn(false);
    }

    let button;

    // if(isLoggedIn){
    //     button = <LogOutBtn handler={logoutHandler}/>
    // }else{
    //     button = <LogInBtn handler={loginHandler}/>
    // }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn ? <LogOutBtn handler={logoutHandler}/>
                        : <LogInBtn handler={loginHandler}/>}
        </div>
    );
}

export default LogInOutCtrl;