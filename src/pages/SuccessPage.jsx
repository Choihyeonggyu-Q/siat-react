import React, { useEffect, useState } from "react";
import api from "../api/axios";

function SuccessPage(props){
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log("debug >> useEffect >>>>>>>>>>>>>>>>>");
        getList();
    }, []);

    const getList = async () => {
        console.log("debug >>> getList endpoint : / react/list");
        const response = await api.get("react/list");
        console.log(`response status ${response.status}`);
        console.log(`response data ${response.data}`);
        setList(response.data);        
    };

    return (
        <div align="center">
            OOO 님 로그인 성공하셨습니다.
            <table class="table">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>status</th>
                        <th>priority</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) =>(
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.status}</td>
                            <td>{item.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SuccessPage;