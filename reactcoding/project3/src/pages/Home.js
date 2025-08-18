import './Home.css';
import Button from '../component/Button';
import Header from '../component/Header';
import Editor from '../component/Editor';

const Home = () =>{
    return (
      <div>
          <Header title={"Home"} leftChild={
          <Button  text={"<"} onClick={()=>{alert("positive 버튼클릭");
          }}
          />
        }
        rightChild={
          <Button type="negative" text={">"} onClick = {()=>{ alert("negative 버튼클릭");
          }}
          />
        }
      />  
      
      <Editor onSubmit={()=> { alert("작성완료")}}/>

      </div>


      
    );
};

export default Home;