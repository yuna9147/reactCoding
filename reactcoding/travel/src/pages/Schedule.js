import { dateSeparate } from '../component/util';
import TravelInfo from '../component/TravelInfo';
import { useNavigate, useParams } from 'react-router-dom';
import useDetail from '../hooks/useDatil';


const Schedule = () =>{

    const {pid} = useParams();
    const data = useDetail(pid);
    const navigator = useNavigate();

    return(
        <div className="Schedule">
        <div className='create_section'>
                <button type="button" onClick={()=> navigator("/detailItems")}>일정 추가</button>
            </div>
            <div className='main_section'>
                
                {data ? (
        dateSeparate(data.start_date, data.end_date).map((i) => (
          <div key={i}>
            <h4>{i}일차</h4>
            <TravelInfo />
          </div>
        ))
      ) : (
        <p>데이터 로딩 중...</p>
      )}
    </div>
  </div>
    );
}

export default Schedule;