import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TravelStateContext } from "../App";

const useDetail = (pid) => {
    const data = useContext(TravelStateContext);
    console.log(data);
    const [travel, setTravle] = useState();
    const navigate = useNavigate(); 

    useEffect(()=> {
        const matchTravel = data.find((it) => String(it.pid) === String(pid));
        if(matchTravel) {
            setTravle(matchTravel);
        } else {
            alert("여행 정보가 존재하지 않습니다");
            navigate("/", {replace: true}); 
        }
    }, [pid]);
    return travel;
}

export default useDetail;