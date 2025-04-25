import React from "react";
import FancyBorder from "./FancyBorder";

function WelcomeDialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="title">
                합성
            </h1>
            <p className="message">
                맛점하세요~~
            </p>
        </FancyBorder>
    );
}

export default WelcomeDialog;