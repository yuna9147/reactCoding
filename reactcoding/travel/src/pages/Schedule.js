import { dateSeparate } from '../component/util';
import { useNavigate, useParams } from 'react-router-dom';
import { TravelDispatchContext } from '../App';
import { useContext, useState } from 'react';

import useDetail from '../hooks/useDatil';
import TravelInfo from '../component/TravelInfo';
import New from "./New";
import './Schedule.css';


const Schedule = () =>{

    const {pid} = useParams();
    const data = useDetail(pid);
    const navigator = useNavigate();

    // New.js 컴포넌트 조건부 렌더링을 위한 State
        const [openSidebar, setOpenSidebar] = useState(false);  
        const handleOpen = () => setOpenSidebar(true);      // 생성하기 버튼
        const handleClose = () => setOpenSidebar(false);    // 취소하기 버튼
    
        //  어떤 '일차(n일차)' 버튼을 눌렀는지 기억하기 위한 State
        const [selectDay, setSelectDay] = useState(null);
    
        // 선택된 체크박스의 id를 기억하기 위한 State
        const [selectedids, setSelectedids] = useState([]);
        // 선택된 체크박스의 id 반환 함수
        const handleCheckbox = (id, isChecked) => {
            setSelectedids(prev => {
                if (isChecked) {
                    return [...prev, id];
                } else {
                    return prev.filter(item => item !== id);
                }
            });
        };
    
        // 전역함수 - 삭제 버튼
        const { onDeleteDetail } = useContext(TravelDispatchContext); 
        const clickDelete = () => {
            if(selectedids.length === 0){
                alert("삭제할 일정을 체크해주세요.");
                return;
            }else {
                onDeleteDetail(data.pid, selectedids)
                setSelectedids([]);
            }
        }

    return(
        <div className="Schedule">
            <div className='main_section'>
                
                 {data ? (
        dateSeparate(data.start_date, data.end_date)?.map((i) => (
            <div key={i} className='content_section'>
                <div className='top_section'>
                    <h4>{i}일차</h4>
                    <div>
                        <button type="button" onClick={() => { setSelectDay(i); handleOpen(); }}>일정 추가</button>
                        <button type="button" onClick={() => { setSelectDay(i); clickDelete(); }}>일정 삭제</button>
                    </div>
                </div>
                {(data.content || []).map((planItem) => (
                    planItem.day === i ? (
                        <div key={planItem.id} className="planItem">
                            <input
                                type="checkbox"
                                value={planItem.id}
                                onChange={e => handleCheckbox(planItem.id, e.target.checked)}
                            />
                            <TravelInfo data={planItem} />
                        </div>
                    ) : null
                ))}
            </div>
        ))
    ) : (
        <p>데이터 로딩 중...</p>
    )}
</div>
 {openSidebar && <New component={"detail"} onClose={handleClose} pid={pid} day={selectDay} />}
  </div>
    );
}

export default Schedule;