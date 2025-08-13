import './NoticeList.css';
import Notice from './Notice'

const NoticeList = ({notice, count}) => {
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
                    <Notice key={no} {...it}/>
                ))}
           </div> 
           <div className="footer">
                <div> 게시글 총 {count}건</div>                       
                <button type="button">새글</button>
           </div>
        </div>
    );
}

export default NoticeList;