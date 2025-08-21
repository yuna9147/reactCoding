import {  useNavigate, useParams } from 'react-router-dom';
import Button from '../component/Button';
import Header from '../component/Header';
import Editor from '../component/Editor';
import { DiaryDispatchContext } from '../App';
import { useContext } from 'react';
import useDiary from '../hooks/useDiary';

const Edit = () => {
  const {id} = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const {onDelete,onUpdate} = useContext(DiaryDispatchContext);

  const goBack =() =>{
    navigate(-1);
  };



  const onClickDelete = () => {
    if(window.confirm("일기를 삭제하시겠습니까?")) {
      onDelete(id);
      navigate("/",{replace:true});
    }
  };

  
    const onSubmit = (data) => {
    if(window.confirm("일기를 정말 수정할까요?")){
      const{date,content,emotionId} = data;
      onUpdate(id,date,content,emotionId);
      navigate("/",{replace:true});
    }
   
  };


  if(!data) {
    return <div>일기를 읽어오는 중입니다.</div>;
  } else{
       return (
    <div className="Edit">
       <Header 
        title={"일기 수정하기"}
        leftChild={<Button text={"<뒤로가기"} onClick={goBack}/>} 
        rightChild={<Button text={"삭제하기"}  type="negative" onClick={onClickDelete}/>} 
        />


        <Editor   initData={data}   onSubmit={onSubmit}/>
    </div>
  );
  } 
     
}
export default Edit;