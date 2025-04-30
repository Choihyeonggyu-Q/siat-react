import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const moveUrl = useNavigate();
    const loginHandler = async () => {
      const response = await api.post("auth/login", {
          "email"  : email,
          "passwd" : passwd
      });
      console.log("debug > ", response);
      console.log("authorization", response.headers.get["Authorization"]);
      console.log("refreshToken", response.headers.get["Refresh-Token"]);

      localStorage.setItem("accessToken", response.headers.get["Authorization"]);
      localStorage.setItem("refreshToken", response.headers.get["Refresh-Token"]);
      moveUrl("/success");
    }
    return(
      <div>
        <h2>토큰 로그인</h2>
        <input  type="text"
                placeholder="이메일"
                value={email}
                onChange={ (e) => setEmail(e.target.value)} />
        <input  type="password"
                placeholder="패스워드"
                value={passwd}
                onChange={ (e) => setPasswd(e.target.value)} />
        <button onClick={loginHandler}>Login</button>
      </div>  
    );
}

export default Login;