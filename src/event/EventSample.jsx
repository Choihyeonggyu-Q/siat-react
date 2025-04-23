import React from "react";

function EventSample(props){
    const handler = (id, pwd) => {
        console.log("debug >>> btn click");
        console.log(id, pwd);
        const data = {"id" : id, "pwd" : pwd}
        // axios.port("http://ip:port/login");
    }
    return (
        <div>
            <button onClick={() => handler('jslim', 'jslim') }>click</button>
        </div>
    );
}

export default EventSample;