import {useState} from 'react';
import './NoticeForm.css'

const NoticeForm = ({onCreate,handleNewContentClose}) =>{


    const[title,setTitle] = useState("");
    const[content,setContent] = useState("");
    const[important,setImportant]=useState(false);
 
     const onChangeTitle = (e) =>{
        setTitle(e.target.value);
    }

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }

    const onChecked = (e) =>{
        setImportant(e.target.checked);

    }

       const CreateContent = () => {
      if(!title.trim()){
         alert("제목을 입력하세요");
          return;
      } else if(!content.trim()){
            alert("내용을 입력하세요");
            return;
        }
        onCreate(title,content,important);
        setTitle("");
        setContent("");
        setImportant(false);
    };

    const close =() =>{
     handleNewContentClose();
    }

   

    return(
        <div className="NoticeForm">
            <h2>글작성</h2> 
            <div >
             
                <div className="form-wrap writer">
                    <div>작성자</div>
                    <div>admin</div>
                </div>

                <div className="form-wrap important">
                    <div>중요공지</div>
                    <div className="checkbox">
                        <input type="checkbox" checked={important} onChange={onChecked}/>
                    </div>
                </div>

                <div className="form-wrap title">
                    <div>제목</div>
                    <div>
                        <input type="text" className="title" value={title} onChange={onChangeTitle} placeholder='제목을 입력하세요' />
                    </div>
                </div>
                
                <div className="form-wrap content">
                    <div>내용</div>
                    <div>
                        <textarea className="inputContent" value={content} onChange={onChangeContent} placeholder='내용 입력' cols='90' rows='20' />
                    </div>
                </div>
                <div className="button-wrap">
                 <button type="button" className="createBtn" onClick={CreateContent}>등록</button>
                 <button type="button" className="closeBtn" onClick={close}>닫기</button>
                </div>
            </div> 
         
        </div>
    )
}

export default NoticeForm;