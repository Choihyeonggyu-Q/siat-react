import React, { useContext } from "react";
import ctx from "./ContextMode.js";

function ContextFooter(props){
    const {isMode, setIsMode} = useContext(ctx);
    const changeHandler = () =>{
        console.log("debug >> changeHandler");
        setIsMode(! isMode);
    };
    return (
        <div>
            <footer style={{
                backgroundColor : isMode ? "black" : "white"
            }}>
                <button onClick={changeHandler}>
                    모드변경
                </button>
            </footer>
        </div>
    );
}
export default ContextFooter;