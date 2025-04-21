import React from "react";

const imgStyle = {
    Image : {
        width : 50,
        height : 50,
        borderRadius :25
    }
};
function Avatar(props){
    return(
        <img    src={props.src}
                alt={props.msg}
                style={imgStyle.Image}/>
    );
}

export default Avatar;