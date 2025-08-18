import './Editor.css';
import { useState } from 'react';
import { getFormattedDate } from '../util';
import Button from "./Button"
import { useNavigate } from "react-router-dom";
import {getEmotionImgById} from '../util';

const Editor = ({initData,onSubmit}) =>{
    const navigate = useNavigate();
    const [state,setState] = useState({
        date:getFormattedDate(new Date()),
        emotionId:3,
        content:"",
    });

    const handleChangeDate = (e) =>{
        setState({
            ...state,
            date:getFormattedDate(new Date(e.target.value)),
        });
    };

    const handleChangeContent = (e) =>{
        setState({
            ...state,
            content:e.target.value,
        });
    };

    const handleSubmit = () =>{
        onSubmit(state);
    };

    const handleGoBack = () =>{
        navigate(-1);
    };

    const handleChangeEmotion = (e) =>{
       setState({
        ...state,
        emotionId:e,
       });
     };

    return(
      <div className="Editor">
        <div className="editor_section">
            <h4>오늘의 날짜</h4>
            <div className='input_wrapper'>
                <input type="date" value={state.date} onChange={handleChangeDate} />
            </div>
        </div>
        <div className='editor_section'>
            <h4>오늘의 감정</h4>
            <div className='emotion_list_wrapper'>
                {[1,2,3,4,5].map((id)=>(
                    <div
                        key={id}
                        className={`emotion emotion${id} ${state.emotionId ===id ?  'emotion-on':''}`}
                        onClick={() => handleChangeEmotion(id)} >
                            <img src={getEmotionImgById(id)} alt={`감정${id}`} /><br/>
                            {['완전좋음','좋음','그럭저럭','나쁨','끔찍함'][id-1]}
                    </div>
                ))}
                </div>
        </div>
        <div className='editor_section'>
            <h4>오늘의 일기</h4>
            <div className='input_wrapper'>
                <textarea placeholder='오늘의 일기' value={state.content} onChange={handleChangeContent} />
            </div>
        </div>
        <div className='editor_section bottom_section'>
            <Button text={'취소'} onClick={handleGoBack} />
            <Button text={'작성 완료'} type={'positive'} onClick={handleSubmit}/>
        </div>
      </div>  
    );
}

export default Editor;