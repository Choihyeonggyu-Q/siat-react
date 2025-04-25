import React, { useContext } from "react";
import ctx from "./ContextMode.js"

function ContextHeader(props){
    const {isMode} = useContext(ctx);
    return (
        <div>
            <header style={{
                backgroundColor : isMode ? "black" : "white" ,
                color : isMode ? "white" : "black"
            }}>
                <h1>즐거운 주말 보내세요~~~!</h1>
            </header>
        </div>
    );
}
export default ContextHeader;