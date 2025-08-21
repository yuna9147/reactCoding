import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import Header from '../component/Header';
import Editor from '../component/Editor';
import { DiaryDispatchContext } from '../App';
import { useContext } from 'react';

const New = () => {
  const navigate = useNavigate();
  const {onCreate} = useContext(DiaryDispatchContext);

  const goBack =() =>{
    navigate(-1);
  };

  const onSubmit = (data) => {
    const{date,content,emotionId} = data;
    if(content===""){
      alert("내용을 입력해 주세요");
    } else {
      onCreate(date,content,emotionId);
      navigate("/",{replace:true});
    }
   
  };


      return (
    <div className="New">
      <h1>New 화면</h1>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button text={"< 뒤로 가기"} onClick={goBack}/>} />


      <Editor onSubmit={onSubmit} />
    </div>
  );
}
export default New;