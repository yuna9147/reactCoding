import {useParams} from 'react-router-dom';
import './Diary.css'

const Diary = () => {
  const {id} = useParams();
  
      return (
    
      <div className="DiaryList">
        <div className="DiaryItem">
          <div className='emotionArea'>이미지 </div>
          <div className="contentArea">
            <div>날짜</div>
            <div>내용</div>
          </div>
          <div className='buttonArea'><button type="button" >수정하기</button></div>
        </div>
    </div>
  );
}
export default Diary;