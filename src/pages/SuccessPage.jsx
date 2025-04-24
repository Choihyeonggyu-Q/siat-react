import React, { useEffect, useState } from "react";
import api from "../api/axios";
import TodoItem from "../items/TodoItem";

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

    const deleteHandler = async (seq) => {
        const response = await api.get(`/react/delete?seq=${seq}`);
        if(response.status === 204){
            // getList();
            console.log("debug >> delete OK");
            setList(...[list.filter(todo=>todo.seq != seq)]);
        }
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
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((items) => {
                            return (
                                <TodoItem   key={items.seq}
                                            data={items} 
                                            handler={deleteHandler}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SuccessPage;