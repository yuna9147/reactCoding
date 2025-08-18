import './App.css';
//import TestComponent from './component/TestComponent'
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useReducer,useRef } from 'react';

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
];

function reducer(state,action){
  switch(action.type){
    case "create" :{
      return [...state,action.newItem];
    }
    case "update" : {
      return state.map((it) =>
      it.id === action.targetId?{...it, isDone: !it.isDone,}:it);
    }
    case "delete" : {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

const App = () => {
  const[todo,dispatch] = useReducer(reducer,mockTodo);
  const idRef = useRef(3);

  const onCreate = (content,date) =>{
    dispatch({
      type:"create",
      newItem : {
      id:idRef.current,
      content,
      isDone:false,
      createdDate: date,
    },
  });
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    dispatch({
      type:"update",
      targetId,
  });
  };

  const onDelete = (targetId) => {
    dispatch({
      type:"delete",
      targetId,
    });
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