import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TravelStateContext } from "../App";

const useDetail = (pid) => {
    const data = useContext(TravelStateContext);
    const [travel, setTravel] = useState();
    const navigate = useNavigate(); 

    useEffect(()=> {
        const matchTravel = data.find((it) => String(it.pid) === String(pid));
        if(matchTravel) {
            setTravel(matchTravel);
        } else {
            alert("여행 정보가 존재하지 않습니다");
            navigate("/", {replace: true}); 
        }
    }, [pid, data]);
    return travel;
}

export default useDetail;