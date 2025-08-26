import './New.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { TravelDispatchContext} from '../App';
import InputForm from '../component/InputForm';
import Input from '../component/Input';
import useDetail from '../hooks/useDatil';
import { getFormattedDate,formatDate,validateInput } from '../component/util';


/* 생성 컴포넌트 - 사이드바 형태 */
const New = ({ component, handleClose, pid, day,isEdit, setIsEdit,selectedIds,setSelectedIds ,}) => {
    const data = useDetail(pid);        // pid에 해당되는 data 추출
    const navigate = useNavigate();     // 컴포넌트 간 이동


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


    // 입력 데이터 초기화 함수
    const stateReset = () => {
        setState({
            title:"", city:"", start_date: new Date().getTime(), end_date: new Date().getTime(), content:[],
        })
        setDetailState({
            spot: "", about: "", tags: "", tip: "", option: "", day: "",
        })
    }

     // data가 들어오면 수정모드의 초깃값으로 세팅
     useEffect(()=>{
            if(data && component === "home") {
                setState({
                    title: data.title,
                    city: data.city,
                    start_date: getFormattedDate(new Date(data.start_date)),
                    end_date: getFormattedDate(new Date(data.end_date)),
                })
            } 
            else if(data && component === "detail") {
                const id = selectedIds[0];
                if (id === undefined || id === null) return;
    
                const selectcontent = data.content?.find(p => p.id === id);
                setDetailState({
                    spot: selectcontent.spot,
                    about: selectcontent.about,
                    tags: selectcontent.tags,
                    tip: selectcontent.tip,
                    option: selectcontent.option,
                    day: selectcontent.day,
                })
            }
        }, [data, component, pid, selectedIds])

    // 입력 데이터 변경
    const onChange = (e) => {
        const { name, value } = e.target;
        // Home.js(여행 정보) 에서 New 컴포넌트 렌더링한 경우
        if(component === "home") {
            setState({
                ...state,
                [name] : value,
            })
        } else if(component === "detail") {
            setDetailState(prev => ({...prev, [name]:value}));
        }
    }

    const { onCreate,onCreateDetail } = useContext(TravelDispatchContext);  


    // 생성하기 버튼 클릭시 호출되는 함수
    const onClickCreate = () => {
         // 유효성 검증
                const { valid, message } = validateInput({ component, state, detailState });
                if (!valid) {
                    alert(message);
                    return;
                }

        let currentPid = pid;

        if(component === "home") {
            currentPid = onCreate(state.title, state.city, state.start_date, state.end_date);

        } else if(component === "detail") {
            const newcontent = [...state.content, detailState];
            setState(prev => ({
                ...prev, 
                content: newcontent
            }));
           onCreateDetail(pid, detailState);
            stateReset();
             navigate(`/detail/${currentPid}`);
        }
        setIsEdit(false);
        handleClose();
    }

    const { onUpdate } = useContext(TravelDispatchContext);         // 전역함수(수정)
    const { onUpdateDetail } = useContext(TravelDispatchContext);   // 전역함수(세부 수정)
    // 수정하기 버튼 클릭시 호출되는 함수
    const onClickUpdate = () => {

         // 유효성 검증
                const { valid, message } = validateInput({ component, state, detailState });
                if (!valid) {
                    alert(message);
                    return;
                }

        if(component === "home") {
            onUpdate(pid, state.title, state.city, state.start_date, state.end_date);
        } else if(component === "detail") {
            const id = selectedIds[0];
            onUpdateDetail(pid, id, detailState)
            stateReset();
            navigate(`/detail/${pid}`);
        }
        setIsEdit(false);
        handleClose();
        setSelectedIds([])
    }


    // Home.js OR Detail.js 컴포넌트에 따라 다르게 출력되는 형태
    if (component === "home") {
        return(
            <div className="New">
                <InputForm 
                    title={ isEdit ? "여행 일정 수정" : "여행 일정 생성"}
                    onSubmit={ isEdit ? onClickUpdate  : onClickCreate}
                    handleClose={handleClose}
                    isEdit={isEdit} setIsEdit={setIsEdit}
                >
                    <Input label={"여행 이름"} type={"text"} name="title" value={state.title} onChange={onChange} placeholder={"이번 여행의 이름을 정해주세요"}/>
                    <Input label={"여행지"} type={"text"} name="city" value={state.city} onChange={onChange} placeholder={"어디로 여행가시나요?"}/>
                    <Input label={"여행 기간"} type={"date"} onChange={onChange} value={[state.start_date, state.end_date]}/>
                </InputForm>
            </div>
        )
    } else if(component === "detail") {
        return(
            <div className="New">
                <InputForm 
                    title={ isEdit ? "여행 상세 정보 수정" : "여행 상세 정보 생성"}
                    onSubmit={ isEdit ? onClickUpdate  : onClickCreate}
                    handleClose={handleClose}
                    isEdit={isEdit} setIsEdit={setIsEdit}
                >
                    <Input label={"여행 장소"} type={"text"} name="spot" value={detailState.spot} onChange={onChange} placeholder={"방문할 장소를 적어보세요"}/>
                     <label>설명</label>
                    <textarea type={"text"} name="about" onChange={onChange} placeholder={"여행지 소개를 적어보세요"} rows={7}/>
                    <Input label={"태그"} type={"text"} name="tags" value={detailState.tags} onChange={onChange} placeholder={"예: 건축물"}/>
                    <Input label={"운영시간"} type={"text"} name="tip" value={detailState.tip} onChange={onChange} placeholder={"예: 09:00 ~ 18:00"}/>
                    <hr/>
                    <Input type={"category"} onChange={onChange}/>
                </InputForm>
            </div>
        )
    }
    
};

export default New;