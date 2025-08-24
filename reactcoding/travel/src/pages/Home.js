import './Home.css';
import { useContext, useState } from "react";
import { TravelDispatchContext, TravelStateContext } from "../App";
import New from "./New";
import PixabayImage from '../component/PixabayImage';
import { useNavigate } from 'react-router-dom';
import location from '../img/location.png';
import calendar from '../img/calendar.png';

const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpen = () => setOpenSidebar(true);
  const handleClose = () => setOpenSidebar(false);

  const navigate = useNavigate();

  const goDetail = (idx) => {
    navigate(`/detail/${idx}`);
  };

  const data = useContext(TravelStateContext);
  const { onDelete, onUpdate } = useContext(TravelDispatchContext);
  
  return (
    <div className="Travel">
    <div style={{ width: "100%", padding: "20px", height:"100vh"}}>
      <div className='Title'>
        <h1><header>나의 여행</header></h1>
      </div>

      <div className='NewTravel'>
        <button onClick={handleOpen}> 새 여행 만들기</button>
      </div>
            
      <div className='Array'>
        <span>정렬 기준: </span>
        <select className='sort-dropdown'>
          <option value="start-date">여행 시작일</option>
            <option value="end-date">여행 종료일</option>
            <option value="title">제목순</option>
            <option value="created-date">생성일</option>
        </select>
      </div>
      
     {data.map((it,idx) => (
        <div key={idx} className="content-wrapper">
          <div className='travel-image'>
            <PixabayImage city={it.city} />
            </div>
            <div className='travel-content'>
              <div className='title' onClick={()=>goDetail(idx)}>{it.title}</div>
              <div className="city"><img src={location}/>{it.city}</div>
              <div className='date'><img src={calendar}/>{new Date(it.start_date).toLocaleDateString()} ~ {new Date(it.end_date).toLocaleDateString()}</div>
          </div>
          <div className='travel-buttons'>
          <button type="button" onClick={() => onUpdate(idx)}>수정</button>
          <button type="button" onClick={() => onDelete(idx)}>삭제</button>
        </div>
        </div>
      ))}

      {openSidebar && <New component={"home"} onClose={handleClose} />}
    </div>
    </div>
  );
};

export default Home;