import { useNavigate } from 'react-router-dom';
import Input from '../component/Input';
import './New.css';
import { useContext, useState } from 'react';
import { TravelDispatchContext, TravelStateContext } from '../App';

/* 여행 만들기 컴포넌트 */
/* 사이드바 형태로 제작 */
const New = ({ onClose }) => {
    const navigate = useNavigate(); 
    const [state, setState] = useState({
          title:"",
          city:"",
          start_date: new Date().getTime(),
          end_date: new Date().getTime(),
    });
    
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }


    const { onCreate } = useContext(TravelDispatchContext);

    const onSubmit = () => {
        const {title, city, start_date, end_date} = state;
        const newDataNum = onCreate(title, city, start_date, end_date);

        navigate(`/detail/${newDataNum}`); /* id 파라미터 값 따로 구현하는 훅 아직 안만들었음 */
    }

    return(
        <div className="New">
            <h1>여행 상세 정보 등록</h1>
            <div className="input_section">
                <Input label={"여행 이름"} type={"text"} name="title" onChange={onChange}/>
                {/* <p>0/40 최대 글자수</p> */} {/* 나중에 구현 */}
                <Input label={"여행지"} type={"text"} name="city" onChange={onChange}/>
                <Input label={"여행 기간"} type={"date"} onChange={onChange}/>
            </div>
            <div className="button_section">
                <button id="createBtn" type="button" onClick={onSubmit}>생성하기</button>
                <button id="cancelBtn" type="button" onClick={onClose}>취소하기</button>
            </div>
        </div>
    )
};

export default New;