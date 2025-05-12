import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function ForcastPage(props){
    const [base_time, setBase_time] = useState('');
    const [base_date, setBase_date] = useState('');
    const [beach_num, setBeach_num] = useState('');
    const moveUrl = useNavigate();

    //axios
    const forcastHandler = async (base_time, base_date, beach_num) => {
        console.log("debug >> forcast Handler");
        console.log("요청 파라미터 >>", { base_time, base_date, beach_num });
        try {
            // http://ip:port/forcast/getDate?base_time=base_time...
            const response = await api.get("forcast/getData",{
                params: {
                    base_time: base_time,
                    base_date: base_date,
                    beach_num: beach_num
                }
            });            
            console.log(response.data);
            moveUrl("/list", {
                state: response.data
            });
        } catch (error) {
            console.error("예보정보 요청 중 에러 발생:", error);
        }
            
    }
    return(
        <div>
        <input  type="text"
                placeholder="예보시간"
                value={base_time}
                onChange={(e) => setBase_time(e.target.value)} /><br/>
        <input  type="text"
                placeholder="예보날짜"
                value={base_date}
                onChange={(e) => setBase_date(e.target.value)} /><br/>
        <input  type="text"
                placeholder="해변번호"
                value={beach_num}
                onChange={(e) => setBeach_num(e.target.value)} /><br/>

        <button onClick={(e) => forcastHandler(base_time,base_date,beach_num)}>예보정보 요청</button>
      </div>  
    );
}

export default ForcastPage;