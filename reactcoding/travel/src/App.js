import './App.css';
import React, { useEffect, useRef, useState,useReducer } from 'react';
import {Routes, Route} from 'react-router-dom';
import Thema from './pages/Thema';
import New from './pages//New';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import DetailItems from './pages/DetailItems';
import Home from './pages/Home';


const day = new Date().getTime();

const mockData = [
  {
  pid:0,
  title:"프랑스 여행",
  city:"파리",
  start_date: new Date(day).getTime(),
  end_date: new Date(day).getTime() + (5000*60*60*24),
   content: [{
  id:"0",
  spot:"개선문",
  about:`에투알 개선문은 프랑스 파리에 있는 개선문이다.
        프랑스 혁명과 나폴레옹 전쟁 시기에 죽은 프랑스 병사들을 기리기 위하여 지어졌으며, 1836년 7월 26일에 완공되었다.
        
        21세기 에펠 탑과 함께 프랑스와 파리를 상징하는 랜드마크 중 한 건축물이며, 제1차 세계 대전, 제2차 세계 대전, 68혁명 등 프랑스 근현대사의 굵직굵직한 사건들을 함께한 문이다.       나폴레옹은 로마 원정 당시 콘스탄티누스 대제의 개선문을 보고 매우 탐이 났으나 도저히 파리로 가져올 수가 없었다. 
        그래서 파리에 개선문을 만들었는데 물론 훨씬 더 크고 멋지게 완성되었다. 
        
        파리 개선문은 폭 45m, 높이 50m의 거대한 구조물로, 벽면에는 각종 전쟁의 승리를 기념하는 부조가 조각되어 있다.`,
  tags:"건축물",
  tip:`운영안내

       [4~9월] 
       수~월 10:00~23:00, 화 11:00~23:00
       
       [10~3월] 
       수~월 10:00~22:30, 화 11:00~22:30

       [휴무일]
       1월 1일, 5월 1일, 5월 8일(아침), 6월 14일(아침), 11월 11일(아침), 12월 25일`,
  option:"activity",
  img:"triomphe.jpg"},
{
  id:"1",
  spot:"에펠탑",
  about:`에펠탑은 프랑스 파리 마르스 광장에 위치한 격자형 철골 타워이다. 

        1889년에 프랑스 혁명 100주년을 맞이하여 파리 만국 박람회를 개최하였는데 이 박람회를 상징할만한 기념물로 에펠탑을 건축하였다.
        박람회가 열린 마르스 광장 출입 관문에 위치해있다. 프랑스의 대표 건축물인 에펠탑은 격자 구조로 이루어져 파리에서 가장 높은 건축물이며, 매년 수백만 명이 방문할 정도로 파리에서 빼놓을 수 없는 세계적으로 유명한 관광명소이다. 
        이 탑은 공모전을 통해 선정된 프랑스 공학자 귀스타브 에펠의 작품으로 이를 디자인한 그의 이름을 따서 명명했다.

        에펠탑은 그 높이가 324m이며,이는 81층 높이의 건물과 맞먹는 높이이다. 
        1930년 크라이슬러 빌딩이 완공되기 전까지는 세계에서 가장 높은 건축물이었다. 
        방송용 안테나를 제외하고도, 2004년 지어진 미요 교에 이어 프랑스에서 두 번째로 높은 구조물이다. 1991년에는 세계문화유산으로 등재되었다.`,
  tags:"건축물",
  tip:`운영안내

       08:45~00:45 
       (마지막 입장 23:45)

       [휴무일] 연중무휴`,
  option:"activity",
  img:"eiffelTower.jpg"}
]
  },
  {
  pid: 1,
  title:"배낭 여행",
  city:"도쿄",
  start_date: new Date(day).getTime(),
  end_date: new Date(day).getTime() + (1000*60*60*24),
  content: [{
  id:"1",
  spot:"디즈니랜드" ,
  about:`1983년에 개장했으며, 826,000㎡의 부지에 미국 애너하임에 위치한 디즈니랜드를 재현한 테마파크다.

        시설 내용이나 운영은 미국 애너하임에 위치한 디즈니랜드와 같지만, 32개의 시설 가운데 2가지는 일본 관객을 위하여 새로 개발한 것이다. 
        현재는 바로 옆에 2001년 개장한 도쿄 디즈니씨와 주변의 디즈니호텔들과 도쿄 디즈니 리조트 오피셜 호텔들 그리고 디즈니 리조트 라인 외 부대시설들과 함께 일대에 도쿄 디즈니 리조트를 이루고 있다.`,
  tags:"테마파크",
  tip:`운영안내
  
      09:00~21:00

      [참고]
      시즌에 따라 시간 변동, 반드시 방문일자의 공식 홈페이지를 확인하세요.
      `,
  option:"activity",
  img:"disneyland.jpg"}]
  },
  {
  pid: 0,
  title:"신혼 여행",
  city:"발리",
  start_date: new Date(day).getTime(),
  end_date: new Date(day).getTime() + (1000*60*60*24),
  content: [{
  id:"2",
  spot:"Taco Casa" ,
  about:`2010년에 설립된 타코 카사는 심플하고 깔끔하며 캐주얼하고 빠른 서비스를 제공하는 타코 전문점으로, 신선하고 가볍고 맛있는 멕시코 요리를 선보입니다. 
  
        밀가루 토르티야, 과카몰리, 피코 데 가요 살사, 엔칠라다 소스, 핫소스, 콩(블랙빈, 핀토빈, 튀겨낸 콩), 타코 쉘, 콘칩, 타코 샐러드 볼, 샐러드 드레싱은 모두 신선한 재료로 직접 만들어지며 라드, MSG, 방부제를 전혀 사용하지 않습니다.
        
        매일 소량씩 만들어 냉장 보관하여 품질과 신선도를 유지합니다. 
        가능한 한 유기농 및 현지 재료를 사용합니다. 소고기는 안심, 닭고기는 닭가슴살 필레를 사용합니다.
        
        우붓, 스미냑, 짱구 세 곳에 지점이 있습니다. 
        우붓 지점은 매장 식사, 테이크아웃, 배달 서비스(우붓 지역 한정)를 제공합니다. `,
  tags:"멕시코 요리",
  tip:`운영안내
  
      [평일]
      07:00~22:00
      
      [주말]
      10:00~22:00
      `,
  option:"food",
  img:"taco.jpg"}]
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

export const TravelStateContext = React.createContext();
export const TravelDispatchContext = React.createContext();

const App = () => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(3);

  useEffect(()=>{
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  },[]);

  const onCreate = (title, city, start_date, end_date) => {
    const newDataNum = idRef.current;
    dispatch({
      type:"CREATE",
      data: {
        pid:newDataNum,
        title:title,
        city:city,
        start_date: new Date(start_date).getTime(),
        end_date: new Date(end_date).getTime(),
      },
    });
    idRef.current += 1;
    return newDataNum;
  };
  console.log(data);

  const onUpdate = () => {

  }
  const onDelete = () => {
    
  }

  
  if(!isDataLoaded) {
      return <div>데이터를 불러오는 중입니다...</div>
    } else {
      return ( 

          <TravelStateContext.Provider value={data}>
            <TravelDispatchContext.Provider 
              value={{ onCreate, onUpdate, onDelete }} >

                
         <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/detail/:pid' element={<Detail />} /> 
              <Route path='/detailItems/:id' element={<DetailItems />} /> 
              <Route path='/edit/:id' element={<Edit />} /> 
              <Route path='/thema/:pid' element={<Thema data={mockData} />} />
            </Routes>

          </div>
              </TravelDispatchContext.Provider>
          </TravelStateContext.Provider>
        ); 
      }
    }
export default App;
