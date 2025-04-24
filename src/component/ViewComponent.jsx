import React from "react";
import { Link, useLocation } from "react-router-dom";

function ViewComponent(props){
    const location = useLocation();
    const data = location.state;
    return (
        
        <div>
            <Link to="/">랜딩 페이지</Link>
            <h4>상세보기</h4>
            <h2>{data.title}</h2>
            <p>내용: {data.content}</p>
            <p>상태: {data.status}</p>
            <p>우선순위: {data.priority}</p>

        </div>

    );
}

export default ViewComponent;