import React,{useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import List from './pages/List';

export const stateContext=React.createContext();

const serviceKey='035bf9883b6516d3ec7e443705bfd30cca9bffcb8988350bdd5d5f78e4a17ab0';

const busanUrl= `http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&resultType=json`;
const gyeongnameUrl = `http://apis.data.go.kr/6480000/gyeongnamtourculture/gyeongnamtourculturelist?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&resultType=json`;


const App =() => {
  const[isDataLoaded, setIsDataLoaded] = useState(false);
  const[result,setResult] = useState([]);

  const[isRowsLoaded,setIsRowsLoaded] = useState(false);
  const[rows,setRows] = useState([]);

  const location = useLocation();

  useEffect(()=>{

    fetch(busanUrl)
    .then(response=>response.json())
    .then(data=>{
     setResult(data.getRecommendedKr.item);
     setIsDataLoaded(true);
    })
    .catch(error=>console.log(error));


     fetch(gyeongnameUrl)
    .then(response=>response.json())
    .then(data=>{
     setRows(data.gyeongnamtourculturelist.body.items.item);
     setIsRowsLoaded(true);
    })
    .catch(error=>console.log(error));
  },[]);

 const value = location.pathname ==="/list" ? rows : result;

 if(!isDataLoaded && !isRowsLoaded) {
  return <div>데이터를 불러오는 중입니다.</div>;
 } 
 else {
  return (
   <>
        <stateContext.Provider value={value}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:UC_SEQ' element={<Detail />} />
            <Route path='/list' element={<List />} />
          </Routes>
        </stateContext.Provider>
      </>
    );
  }
};

export default App;
