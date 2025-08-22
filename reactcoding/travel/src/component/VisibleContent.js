import { useState } from "react";
import Button from "./Button";
import Thema from "../pages/Thema";
import Schedule from "../pages/Schedule";

    
const VisibleContent= () => {
     const [isVisible, setIsVisible] = useState("thema");
  
    return(
        <>
        <div style={{display:"flex",gap:"20px"}}>
            <Button 
                text="관심 리스트"
                state={isVisible === "thema" ? "thema" : "none"}
                onClick={() => setIsVisible("thema")}
                />

             <Button 
                text="여행 일정"
                state={isVisible === "schedule" ? "schedule" : "none"}
                onClick={() => setIsVisible("schedule")}
                />
        </div>

        <div>
            {isVisible === "thema" && <Thema />}
            {isVisible === "schedule" && <Schedule />}
      </div>
</>














        // <div className={`${cate}-section`}>
        //     <Button onClick={()=>setIsvisible(state)}>{text}</Button>

        //     {isVisible === cate &&(
        //         <div className={`${state}-visible`}>
        //             <Thema />
        //         </div>
        //     )}

        //     {/* {isVisible ==="schedule" &&(
        //        <div className={`${state}-visible`} >
        //             <Schedule />
        //         </div> 
        //     )} */}
        // </div>
    );

}

export default VisibleContent;