import React , {useState} from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function LoginForm(props){
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const moveUrl = useNavigate();

    const loginHandler = async (event, email, pwd) => {
        event.preventDefault();

        console.log("debug >> loginHandler");
        try {
            const data = {"id" : email, "pwd" : pwd};
            const response = await api.post("react/login", data);
            console.log("debug >> response ", response);
            
            if(response.status == 204){
                window.alert("로그인 성공 후 화면 이동 ~");
                moveUrl("/user/success");
            }    
        } catch (error) {
            console.log(error);    
        }

        
    };
    const emailHandler = (event) => {
        console.log("debug >> eventHandler");
        setEmail(event.target.value)
        console.log(`input email ${email}`);
    };
    const pwdHandler = (event) => {
        console.log("debug >> pwdHandler");
        setPwd(event.target.value)
        console.log(`input pwd ${pwd}`);
    };
    return (
        <div>
            <form onSubmit={(event) => loginHandler(event, email, pwd)}>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" value={email} onChange={emailHandler}/>
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" value={pwd} onChange={pwdHandler}/>
                </div>
                <div class="form-check mb-3">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-warning" onClick={() => {
                    moveUrl("/");
                }}>Cancel</button>
                </form>
        </div>
    );
}

export default LoginForm;