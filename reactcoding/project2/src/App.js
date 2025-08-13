import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useState,useRef } from 'react';

const mockTodo = [
  {
    id:0,
    isDone:false,
    content:"React 공부하기",
    createdDate:new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content:"메이플 일퀘",
    createdDate:new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content:"롤 하기",
    createdDate:new Date().getTime(),
  },
]


const App = () => {
  const[todo,setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content,date) =>{
    const newItem = {
      id:idRef.current,
      content,
      isDone:false,
      createdDate: date,
    };
    setTodo([...todo,newItem]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it)=>
      it.id===targetId? {...it,isDone:!it.isDone} : it)
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it)=>
    it.id!==targetId));
  };

  return (
    <div className="App">
       <Header/>
       
       <TodoEditor onCreate = {onCreate}/>
       <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;