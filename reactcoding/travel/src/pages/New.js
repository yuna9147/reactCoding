import { useNavigate } from 'react-router-dom';
import Input from '../component/Input';
import './New.css';
import { useContext, useState } from 'react';
import { TravelDispatchContext} from '../App';




/* 생성 컴포넌트 - 사이드바 형태 */
const New = ({ component, onClose, pid, day }) => {
    // 컴포넌트 이동
    const navigate = useNavigate(); 

    const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0~11
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

    // 여행정보 입력 State 변수
    const [state, setState] = useState({
        title:"",
        city:"",
        start_date: formatDate(new Date()),
        end_date: formatDate(new Date(Date.now()+24*60*60*1000)),
        content:[],
    });
    // 여행 세부정보 입력 State 변수
    const [detailState, setDetailState] = useState({
        spot: "",
        about: "",
        tags: "",
        tip: "",
        option: "",
        day: day || "",
    });
    
    // 입력 정보 상태 변수에 저장하는 함수
    const onChange = (e) => {
        const { name, value } = e.target;
        // Home.js(여행 정보) 에서 New 컴포넌트 렌더링한 경우
        if(component === "home") {
            setState({
                ...state,
                [name] : value,
            })
        // Detail.js(여행 세부정보) 에서 New 컴포넌트 렌더링한 경우
        } else if(component === "detail") {
            setDetailState(prev => ({...prev, [name]:value}));
        }
    }

    // App.js 의 data 상태 변수에 갱신하는 함수
    const { onCreate } = useContext(TravelDispatchContext);         // Home.js
    const { onCreateDetail } = useContext(TravelDispatchContext);   // Detail.js

    // 생성하기 버튼 클릭시 호출되는 함수
    const onSubmit = () => {
        let currentPid = pid;

        // Home.js 컴포넌트일 경우
        if(component === "home") {
            currentPid = onCreate(state.title, state.city, state.start_date, state.end_date);

        // Detail.js 컴포넌트일 경우
        } else if(component === "detail") {
            const newcontent = [...state.content, detailState];
            setState(prev => ({
                ...prev, 
                content: newcontent
            }));


            onCreateDetail(pid, detailState);

            setDetailState({
                spot: "",
                about: "",
                tags: "",
                tip: "",
                option: "",
                day: "",
            })
        }
        navigate(`/detail/${currentPid}`);
        onClose();
    }

    // Home.js OR Detail.js 컴포넌트에 따라 다르게 출력되는 형태
    if (component === "home") {
        return(
            <div className="New">
                <h1>여행 일정 생성</h1>
                <div className="input_section">
                    <Input label={"여행 제목"} type={"text"} name="title" onChange={onChange} placeholder={"여행 제목을 입력해주세요"}/>
                    <Input label={"여행지"} type={"text"} name="city" onChange={onChange} placeholder={"여행지를 입력해주세요"}/>
                    <Input label={"여행 기간"} type={"date"} value={[state.start_date, state.end_date]} onChange={onChange}/>
                </div>
                <div className="button_section">
                    <button id="createBtn" type="button" onClick={onSubmit}>생성하기</button>
                    <button id="cancelBtn" type="button" onClick={onClose}>취소하기</button>
                </div>
            </div>
        )
    } else if(component === "detail") {
        return(
            <div className="New">
                <h1>여행 상세 정보 생성</h1>
                <div className="input_section">
                    <Input label={"여행 장소"} type={"text"} name="spot" onChange={onChange} placeholder={"방문할 장소를 적어보세요"}/>
                    <label>설명</label>
                    <textarea type={"text"} name="about" onChange={onChange} placeholder={"여행지 소개를 적어보세요"} rows={7}/>
                    <Input label={"태그"} type={"text"} name="tags" onChange={onChange} placeholder={"예: 건축물"}/>
                    <Input label={"운영시간"} type={"text"} name="tip" onChange={onChange} placeholder={"예: 09:00 ~ 18:00"}/>
                    <hr/>
                    <Input className="inputCate" type={"category"} onChange={onChange}/>
                </div>
                <div className="button_section">
                    <button id="createBtn" type="button" onClick={onSubmit}>생성하기</button>
                    <button id="cancelBtn" type="button" onClick={onClose}>취소하기</button>
                </div>
            </div>
        )
    }
    
};

export default New;