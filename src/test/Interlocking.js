import React from "react";
import {useState} from "react";
import api from "../api/axios";
import User from "./User";

let users = [];

const btnHandler = async () => {
    console.log(">>>>>>>>>> btn");
    const data = {
        title : "react",
        content : "react",
        priority : 10
    };

// endpoint : http://localhost8088/react/select
    const response = await api.get('/react/select', data);
    console.log("debug >>> ", response);
    console.log("debug >> ", response.data);
    users = response.data;
};

function Interlocking(props){
    return (
        <div>
            <button onClick={btnHandler}>click</button>
    
            {
                users.map((user) => {
                    return (
                        <User name = {user.title} info = {user.content}></User>
                    );
                })
            }
            
        </div>
    );
}

export default Interlocking;