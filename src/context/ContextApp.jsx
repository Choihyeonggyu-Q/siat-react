import React, { useState } from "react";
import ContextPage from "./ContextPage";
import ctx from "./ContextMode.js";

function ContextApp(props){
    const [isMode, setIsMode] = useState(false);
    
    return (
        <div>
            {/* <ContextPage isMode={isMode} setIsMode={setIsMode} /> */}
            <ctx.Provider value={{isMode, setIsMode}}>
                <ContextPage />
            </ctx.Provider>
        </div>
    );
}

export default ContextApp;