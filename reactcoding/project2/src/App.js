import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import TodoItem from './component/TodoItem'
import { useState } from 'react';

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
  return (
    <div className="App">
       <Header/>
       <TodoEditor/>
       <TodoList/>
    </div>
  );
}

export default App;