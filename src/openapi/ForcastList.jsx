import React from "react";
import { useLocation } from "react-router-dom";
import ForcastItem from "./ForcastItem";

function ForcastList(props){
    const location = useLocation();
    const dataList = location.state;

    return(
        <div>
            <h3>예보 결과</h3>
            {   location.state == null?
                <ForcastItem forcast={"단기 예보가 없습니다"}/>
                :
                location.state.map( (forcast, i) => {
                    return (
                        <div>
                            <ForcastItem key={i} forcast={forcast.category}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ForcastList;