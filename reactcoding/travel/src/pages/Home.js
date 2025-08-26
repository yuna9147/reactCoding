import './Home.css';
import { useContext, useState } from "react";
import { TravelDispatchContext, TravelStateContext } from "../App";
import New from "./New";
import PixabayImage from '../component/PixabayImage';
import { useNavigate } from 'react-router-dom';
import location from '../img/location.png';
import calendar from '../img/calendar.png';
import Header from '../component/Header';

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

  // 수정 모드 진입
  const [isEdit, setIsEdit] = useState(false);
  // 수정할 pid 저장
  const [selectPid, setSelectPid] = useState(null);
  const handleEdit = (pid) => {
    setIsEdit(true);
    setSelectPid(pid);
    handleOpen();
  };
  
  return (
    <div className="Travel">
      <Header />
    <div style={{ padding: "20px", height:"100vh"}}>
      <div className='Title'>
        <h1><header>나의 여행</header></h1>
      </div>

      <div className='NewTravel'>
        <button type="button" onClick={handleOpen}> 새 여행 만들기</button>
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
      
     {data.map((it) => (
        <div key={it.pid} className="content-wrapper">
          <div className='travel-image'>
            <PixabayImage city={it.city} />
            </div>
            <div className='travel-content'>
              <div className='title' onClick={()=>goDetail(it.pid)}>{it.title}</div>
              <div className="city"><img src={location}/>{it.city}</div>
              <div className='date'><img src={calendar}/>{new Date(it.start_date).toLocaleDateString()} ~ {new Date(it.end_date).toLocaleDateString()}</div>
          </div>
          <div className='travel-buttons'>
          <button type="button" onClick={() => handleEdit(it.pid)}>수정</button>
          <button type="button" onClick={() => onDelete(it.pid)}>삭제</button>
        </div>
        </div>
      ))}

      {openSidebar && <New component={"home"} handleClose={handleClose} isEdit={isEdit} setIsEdit={setIsEdit} pid={selectPid} setSelectedIds={setSelectPid}/>}
    </div>
    </div>
  );
};

export default Home;