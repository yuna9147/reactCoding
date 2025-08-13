import './TodoEditor.css';
import { useState ,useRef} from 'react';


const TodoEditor = ({ onCreate }) =>{
    const[content,setContent]=useState("");
    const today = new Date().toISOString().split('T')[0];
    const[date,setDate]=useState(today);

    const inputRef = useRef();

    const onChangeContent =(e) =>{
        setContent(e.target.value);
    };

    const onChangeDate = (e) =>{
        setDate(e.target.value);
    }

     const onSubmitContent = () => {
        if (!content.trim()) {
            inputRef.current.focus();
            alert("할 일을 입력하세요!");
            return;
        }

        onCreate(content,date);
        setContent("");
    };

    const onKeyDown = (e) =>{
        if(e.key==='Enter'){
            onSubmitContent();
        }
    };

    return(
        <div className="TodoEditor">
            <h4>새로운 할 일 작성하기✏️</h4>
            <div className="editor_wrapper" >
                <input ref={inputRef} placeholder='새로운 할 일' value={content} onKeyDown={onKeyDown} onChange={onChangeContent} />
                <input type="date" value={date}  onChange={onChangeDate}/>
                <button type="button" onClick={onSubmitContent}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;

