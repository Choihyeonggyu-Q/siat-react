import React from "react";
import ContextHeader from "./ContextHeader";
import ContextBody from "./ContextBody";
import ContextFooter from "./ContextFooter";
import ctx from "./ContextMode.js";

function ContextPage(props){
    return (
        <div>
            {/* <ContextHeader isMode={props.isMode}/>
            <ContextBody    isMode={props.isMode}/>
            <ContextFooter isMode={props.isMode} setIsMode={props.setIsMode}/> */}
            
            <ContextHeader />
            <ContextBody />
            <ContextFooter />    
        </div>
    );
}
export default ContextPage;