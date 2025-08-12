import './App.css';
import { useState,useEffect } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import Event from "./component/Event";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value); // 누적 방식


  };

  const handleReset =() =>{
    setCount(0);
  }

  const handleSetText = (e) =>{
    setText(e.target.value);
  };

  useEffect (()=>{
    console.log("count 업데이트 : ",count,text);
  },[count,text]);



  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input className="text" value={text} onChange={handleSetText} />
      </section>
      <section>
        <Viewer count={count} handleReset={handleReset} />
        {count%2===0&&<Event/>}
        
      </section>

      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
