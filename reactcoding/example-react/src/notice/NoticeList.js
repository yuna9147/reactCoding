import './NoticeList.css';
import Notice from './Notice'
import { useState } from 'react';


const NoticeList = ({notice, count,handleNewContent,onModify,onDelete }) => {

    const [selectedNo, setSelectedNo] = useState(null);
    
    return(
      
        <div className="NoticeList">
            <div className="list-title">
                <div>번호</div>
                <div>제목</div>
                <div>작성자</div>
                <div>작성일</div>
            </div>
            <div className="list_wrapper">
                {notice.map((it,no)=>(
                    <Notice key={no} {...it} selectedNo={selectedNo}  setSelectedNo={setSelectedNo} onDelete={onDelete} onModify={onModify} />
                ))}
           </div> 
           <div className="footer">
                <div> 게시글 총 {count}건</div>                       
                <button type="button" onClick={handleNewContent}>새글</button>
           </div>
        </div>
    );
}

export default NoticeList;