import TravelInfo from "../component/TravelInfo";
import { useParams } from 'react-router-dom';
import './Thema.css'
import { useState } from "react";


const Thema = ({ data }) => {
  const { id } = useParams();
  const item = data?.find((d) => d.id === id);

  const activities = data?.filter((d) => d.option === 'activity');
  const foods = data?.filter((d) => d.option === 'food');
  const hotels = data?.filter((d) => d.option === 'hotel');

  const [showActivity, setShowActivity] = useState(true);
  const [showFood, setShowFood] = useState(true);
  const [showHotel, setShowHotel] = useState(true);
    return(
        <div className="Thema">
            <h1>여행지 정보</h1>
            <div className="activity-section">
                <div className="wrapper"  onClick={() =>setShowActivity(!showActivity)}>
                    <h3>즐길거리 ({activities.length})</h3>
                    <div>{showActivity ? "▼" : "▲"}</div>
                </div>
                {showActivity && activities.map((activity) => (
                <TravelInfo key={activity.id} data={activity}/>
                ))}
            </div>
            <div className="food-section">
                <div className="wrapper"  onClick={() =>setShowFood(!showFood)}>
                    <h3>먹거리 ({foods.length})</h3>
                    <div>{showFood ? "▼" : "▲"}</div>
                </div>
                {showFood &&foods.map((food) => (
                <TravelInfo key={food.id} data={food}/>
                ))}
              
            </div>
             <div className="hotel-section">
                 <div className="wrapper" onClick={() =>setShowHotel(!showHotel)}>
                    <h3>숙소 ({hotels.length})</h3>
                    <div>{showHotel ? "▼" : "▲"}</div>
                </div>
                {showHotel && hotels.map((hotel) => (
                <TravelInfo key={hotel.id} data={hotel}/>
                ))}
            </div>
        </div>
    );
}


export default Thema;