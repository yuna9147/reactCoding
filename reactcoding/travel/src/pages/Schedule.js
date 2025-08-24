import { dateSeparate } from '../component/util';
import { useNavigate, useParams } from 'react-router-dom';
import { TravelDispatchContext } from '../App';
import { useContext, useState } from 'react';

import useDetail from '../hooks/useDatil';
import TravelInfo from '../component/TravelInfo';
import New from "./New";
import './Schedule.css';

const Schedule = () => {
  const { pid } = useParams();
  const data = useDetail(pid);
  const navigator = useNavigate();

  // New.js 컴포넌트 조건부 렌더링
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpen = () => setOpenSidebar(true);
  const handleClose = () => setOpenSidebar(false);

  // 선택한 'n일차'
  const [selectDay, setSelectDay] = useState(null);

  // 선택된 체크박스 ID
  const [selectedIds, setSelectedIds] = useState([]);
  const handleCheckbox = (id, isChecked) => {
    setSelectedIds(prev =>{
            if (isChecked) {
                return [...prev, id];
            } else {
                return prev.filter(item => item !== id);
            }
        });
  };

  // 삭제 기능
  const { onDeleteDetail } = useContext(TravelDispatchContext);
  const clickDelete = () => {
    if (selectedIds.length === 0) {
      alert("삭제할 일정을 체크해주세요.");
      return;
    }
    onDeleteDetail(pid, selectedIds);
    setSelectedIds([]);
  };

  // 수정 모드
  const [isEdit, setIsEdit] = useState(false);
  const updateCheck = () => {
    if (selectedIds.length !== 1) {
      alert("수정하고 싶은 일정 하나를 선택해주세요.");
      return;
    }
    setIsEdit(true);
    handleOpen();
  };

  if (!data) {
    return <div>여행 불러오는 중...</div>;
  } else{

  return (
    <div className="Schedule">
      <div className='main_section'>
        {dateSeparate(data.start_date, data.end_date)?.map((i, idx) => (
          <div key={idx} className='content_section'>
            <div className='top_section'>
              <h4>{i}일차</h4>
              <div>
                <button type="button" onClick={() => { setSelectDay(i); handleOpen(); }}>일정 추가</button>
                <button type="button" onClick={() => { setSelectDay(i); updateCheck(); }}>일정 수정</button>
                <button type="button" onClick={clickDelete}>일정 삭제</button>
              </div>
            </div>

            {(data.content || []).map((planItem,index) => (
              planItem.day === i && (
                <div key={index} className="planItem">
                  <input
                    type="checkbox"
                    value={planItem.id}
                    checked={selectedIds.includes(planItem.id)}
                    onChange={e => handleCheckbox(planItem.id, e.target.checked)}
                  />
                  <TravelInfo data={planItem} />
                </div>
              )
            ))}
          </div>
        ))}
      
      </div>

      {openSidebar && (
        <New
          component="detail"
          handleClose={handleClose}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          pid={pid}
          day={selectDay}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />
      )}
    </div>
  );
};
}
export default Schedule;
