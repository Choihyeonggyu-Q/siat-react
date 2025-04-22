import React from "react";

const styles = {
    container : {
        margin : 8,
        padding : 9,
        display : "flex",
        flexDirection : "row",
        border : "1px solid gray",
        borderRadius : 16
    },
    commnetContainer :{
        marginLeft : 8,
        display : "flex",
        flexDirection : "column",
        justyfyContent : "center"
    },  
    nameTxt : {
        color : "black",
        fontSize : 16,
        fontWeight : "bold"
    },
    commentTxt : {
        color : "red",
        fontSize : 16
    }
};

function Comment(props){
    return(
        <div style={styles.container}>
            <div>

            </div>
            <div style={styles.commnetContainer}>
                <span style={styles.nameTxt}>{props.name}</span>
                <span style={styles.commentTxt}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;