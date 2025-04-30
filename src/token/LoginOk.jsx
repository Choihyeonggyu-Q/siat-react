import React from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function LoginOk(props){
    // const location = useLocation();
    // const {email, passwd} = location.state;
    const moveUrl = useNavigate();
    const btnHandler = async () =>{
        console.log(">>>>>>>>>>>>>>>>>>> btn handler");
        const accessToken = localStorage.getItem("accessToken");
        // 인터셉트 사용하지 않을 떄
        // const response = await api.get('api/v1/hello', {
        //     headers: {Authorization: accessToken,}
        // });
        // 인터셉트 사용
        const response = await api.get('api/v1/hello');
        
        console.log(">>>>>>>>>>> response",response);
    }

    const logoutHandler = () =>{
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        moveUrl("/");
  
    }
    return(
        <div>
            HI-토큰 검증을 통한 사용자 요청 처리
            {/* <p>email : {email}</p>
            <p>passwd : {passwd}</p> */}
            <button onClick={btnHandler}>통신 요청</button>
            <button onClick={logoutHandler}>로그 아웃</button>
        </div>
    );
}

export default LoginOk;