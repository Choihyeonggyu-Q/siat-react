import React, {useEffect, useState} from "react";

// const countHandler = (setCnt, cnt) =>{
//     console.log("debug >>> btn click");
//     setCnt(cnt+1);
//     console.log("debug >>> cnt value", cnt);
// };

function Counter(props){
    // life cycle
    // mount, unmount
    // useEffect(함수, 의존성배열);
    // 의존성 배열을 생략하면 컴포넌트가 업데이트될 때마다 호출되도록 되어있다.
    // 
    useEffect(() => {
        console.log("debug >> component mount");
        console.log("debug >> component update cnt : ", cnt);
    });
    // data state
    const [cnt, setCnt] = useState(0);
    
    return (
        <div>
            <p>사용자 클릭 횟수 : {cnt} </p>
            <button onClick={() => {
                setCnt(cnt + 1)
            } }>상태관리</button>
        </div>
    );
}
export default Counter;