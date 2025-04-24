import React from "react";
import api from "../api/axios"
import { useNavigate } from "react-router-dom";

function TodoItem(props){
    const {data, handler} = props;
    const moveUrl = useNavigate();

    const selectHandler = async (seq) =>{
        const response = await api.get(`/react/read?seq=${seq}`);
        if(response.status === 200){
            moveUrl("view", {
                state: response.data 
            });
        }
    }
    return (
        <tr key={props.seq}>
            <td>{props.data.title}</td>
            <td>{props.data.status}</td>
            <td>{props.data.priority}</td>
            <td>
                <button class="btn btn-primary" onClick={() => props.handler(data.seq)}>
                    삭제
                </button>
                <button class="btn btn-danger" onClick={() => {
                        selectHandler(data.seq);
                    }}>보기
                </button>
            </td>
        </tr>
    );
}
export default TodoItem;