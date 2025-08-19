import './App.css';
import React,{ useReducer, useRef ,useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';

const day = new Date();
day.setDate(day.getDate(0-1));
const mockData = [
  {
  id:"0",
  date:day.getTime(),
  content: "오늘도 리엑트를 배우고 있다.. 그런데 진도가 너무 늦는거 같다.. 그래서 그런가 수업시간에 집중이 되지 않아 수업시간에 점심메뉴를 고르고있었다.. 부디 내일은 진도가 빨리 나갔으면 좋겠다.. 하루가 너무 길게 느껴진다.",
  emotionId:5,
  },
   {
    id:"1",
    date:new Date(day).setDate(day.getDate() - 1),
    content: "오늘은 주말! pc방에서 6시간동안 메이플 사냥과 롤 우르프모드를 즐겼다. 오늘은 pc방에서 점심메뉴로 제육치즈덮밥을 시켜서 먹어봤는데 생각보다 나쁘지 않았다.. 그런데 주문이 많아서였을까? 치즈가 조금 굳어서 왔다. 다음에는 주문량 적을때 다시 시켜봐야겠다.",
    emotionId:2,
  },
  {
    id:"21",
    date: new Date(day).setDate(day.getDate() - 2),
    content: "오늘은 광복절~ 금요일이지만 학원 안가는날! 오늘부터 주말내내 pc방에서 게임할 생각에 너무 신이난다! 알찬 주말 보내야지~",
    emotionId:1,
  },
]

function reducer(state,action){
  switch(action.type){
    case "INIT" : {
      return action.data;
    }
    case "CREATE" : {
      return [action.data, ...state];
    }
    case "UPDATE" : {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? {...action.data} : it);
    }
    case "DELETE" : {
      return state.filter((it) => String(it.id)!==String(action.targetId));
    }
    default:{
      return state;
    }
  }
}

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

const App = () => {
  const[isDataLoaded, setIsDataLoaded] = useState(false);
  const[data,dispatch] = useReducer(reducer,[]);
  const idRef = useRef(3);


  useEffect(()=>{
    dispatch({
      type:"INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  },[]);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type:"CREATE",
      data: {
        id:idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) =>{
    dispatch({
      type:"UPDATE",
      data:{
          id:targetId,
          date: new Date(date).getTime(),
          content,
          emotionId,
      },
    });
  };

  const onDelete = (targetId) =>{
    dispatch({
      type:"DELETE",
      targetId,
    });
  };

  if(!isDataLoaded){
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }} >
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
     </div>
     </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  ); 
  }

  
      // {/* <div>
      //   <Link to={'/'}>Home</Link> <br/>
      //   <Link to={'/new'}>새 일기</Link><br/>
      //   <Link to={'/diary'}>읽기</Link><br/>
      //   <Link to={'/edit'}>수정/삭제</Link>
      // </div> */}
    
}
export default App;
