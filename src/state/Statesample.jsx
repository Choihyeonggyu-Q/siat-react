import React, { useEffect, useState } from "react";

const CAPACITY = 10;

const cntUpHandler = () =>{
    console.log("debug >>> cntUpHandler");
}
const cntDownHandler = () =>{
    console.log("debug >>> cntDownHandler");
}

// 사람이 입장하고 퇴ㅣ장하는데 수용인원에 따른 카운트를 관리하고 싶다면?
function Statesample(props){
    const [cnt, setCnt] = useState(0);
    const [isFull, setIsfull] = useState(false);
    const [isEmpty, setIsempty] = useState(false);

    useEffect(() => {
        console.log("debug >> component update cnt : ", cnt);
        setIsfull(cnt >= CAPACITY);
        setIsempty(cnt <= 0);
    }, [cnt]);

    useEffect(() => {
        console.log("debug >> component isFull : ", isFull);    
    }, [isFull]);

    return (
        <div>
            <p>{`입장인원 : ${cnt}`} </p>
            <button onClick={() => {
                setCnt((cnt) => cnt + 1)
            }} disabled={isFull}>입장</button>
            <button onClick={() => {
                setCnt((cnt) => cnt - 1)
            }} disabled={cnt == 0}>퇴장</button>
            {isFull && ( <p style={{ color: "red"}}>인원이 가득 찼습니다.</p>)}
            {(cnt == 0) && (<p style={{color : "blue"}}>아무도 없습니다</p>)}
        </div>
    );
}
export default Statesample;