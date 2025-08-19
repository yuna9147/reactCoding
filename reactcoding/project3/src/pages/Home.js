import './Home.css';
import Button from '../component/Button';
import Header from '../component/Header';
import Diary from '../pages/Diary';
import {useContext, useState,useEffect} from "react";
import {DiaryStateContext} from "../App"
import { getMothRangeByDate } from '../util';


const Home = () =>{
  const data = useContext(DiaryStateContext);
  const [filteredData, setFilteredData] = useState([]);
  const[pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`;

  useEffect(() =>{
    if(data.length >= 1) {
      const{beginTimeStamp, endTimeStamp} = getMothRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.data && it.data <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  },[data,pivotDate]);


  const onIncreaseMonth = () =>{
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1));
  };

  const onDecreaseMonth = () =>{
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1));
  };

    return (
      <>
      <div>
          <Header title={headerTitle} 
          leftChild={ <Button  text={"<"} onClick={onDecreaseMonth}/> }  
          rightChild={ <Button  text={">"} onClick={onIncreaseMonth}/> }
      />  

      </div>
      <Diary />
       {/* <div>
         Home 화면
         <Editor
          initData={{
            date:new Date().getTime(),
            emotionId:1,
            content:"이전 일기",
          }}
          onSubmit={() =>{
            alert("작성완료")
          }}
          />
       </div> */}

</>
      
    );
};

export default Home;