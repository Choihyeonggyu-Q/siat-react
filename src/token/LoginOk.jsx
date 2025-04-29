import React from "react";
import api from "../api/axios";

function LoginOk(props){
    // const location = useLocation();
    // const {email, passwd} = location.state;
    const btnhandler = async () =>{
        console.log(">>>>>>>>>>>>>>>>>>> btn handler");
        const accessToken = localStorage.getItem("accessToken");

        const response = await api.get('api/v1/hello', {
            headers: {Authorization: accessToken,}
        });
        console.log(">>>>>>>>>>> response",response);
    }
    return(
        <div>
            HI-토큰 검증을 통한 사용자 요청 처리
            {/* <p>email : {email}</p>
            <p>passwd : {passwd}</p> */}
            <button onClick={btnhandler}>통신 요청</button>
        </div>
    );
}

export default LoginOk;