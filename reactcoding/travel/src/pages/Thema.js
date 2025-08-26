import TravelInfo from "../component/TravelInfo";
import './Thema.css'
import { useState } from "react";

const Thema = ({ data, }) => {
  // 해당 여행 안에서 option 별 필터링
  const activities = data.filter(d => d.option === 'activity');
  const foods = data.filter(d => d.option === 'food');

  // id 기준 정렬
  activities.sort((a, b) => a.id - b.id);
  foods.sort((a, b) => a.id - b.id);

  const [showActivity, setShowActivity] = useState(true);
  const [showFood, setShowFood] = useState(true);


    return(
        <div className="Thema">
            <div className="totalInfo">{activities.length+foods.length}개 항목</div>

            <div className="activity-section">
                <div className="wrapper" >
                    <h3>즐길거리 ({activities.length})</h3>
                    <div onClick={() =>setShowActivity(!showActivity)}>{showActivity ? "▲ 접기" : "▼ 펼치기"}</div>
                </div>
                {showActivity && activities.map((activity => (
                <TravelInfo key={activity.id} data={activity}/>
                )))}
            </div>
            
            <div className="food-section" >
                <div className="wrapper">
                    <h3>먹거리 ({foods.length})</h3>
                    <div onClick={() =>setShowFood(!showFood)}>{showFood ? "▲ 접기" : "▼ 펼치기"}</div>
                </div>
                {showFood &&foods.map((food => (
                <TravelInfo key={food.id} data={food}/>
                )))}
            </div>
        </div>
    );
}


export default Thema;