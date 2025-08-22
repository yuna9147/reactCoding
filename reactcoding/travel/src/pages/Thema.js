import TravelInfo from "../component/TravelInfo";
import { useNavigate, useParams } from 'react-router-dom';
import './Thema.css'
import { useState } from "react";
import Header from "../component/Header";
import Button from "../component/Button";


const Thema = ({ data }) => {
  const { pid } = useParams();
  const navigate = useNavigate();

  const goBack = () =>{
    navigate(-1);
  };

   // pid에 해당하는 여행만 필터
  const filteredData  = data.filter(item => String(item.pid)===String(pid));

  // 해당 여행 안에서 option 별 필터링
  const activities = filteredData.filter(d => d.option === 'activity');
  const foods = filteredData.filter(d => d.option === 'food');

  const [showActivity, setShowActivity] = useState(true);
  const [showFood, setShowFood] = useState(true);


    return(
        <div className="Thema">
            <Header title="여행지 정보" leftChild={<Button img="left" onClick={goBack}/>  }/>
            <div className="totalInfo">{activities.length+foods.length}개 항목</div>
            <div className="activity-section">
                <div className="wrapper" >
                    <h3>즐길거리 ({activities.length})</h3>
                    <div onClick={() =>setShowActivity(!showActivity)}>{showActivity ? "▲ 접기" : "▼ 펼치기"}</div>
                </div>
                {showActivity && activities.map((activity) => (
                <TravelInfo key={activity.id} data={activity}/>
                ))}
            </div>
            
            <div className="food-section" >
                <div className="wrapper">
                    <h3>먹거리 ({foods.length})</h3>
                    <div onClick={() =>setShowFood(!showFood)}>{showFood ? "▲ 접기" : "▼ 펼치기"}</div>
                </div>
                {showFood &&foods.map((food) => (
                <TravelInfo key={food.id} data={food}/>
                ))}
            </div>
        </div>
    );
}


export default Thema;