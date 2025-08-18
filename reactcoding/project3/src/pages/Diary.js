import {useParams} from 'react-router-dom';

const Diary = () => {
  const {id} = useParams();
  

      return (
    <div className="Diary">
      <h1> Diary 화면</h1>
      <h2> {id}번 일기</h2>
    </div>
  );
}
export default Diary;