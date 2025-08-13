import './TodoList.css';
import TodoItem from './TodoItem'
import { useState } from 'react';

const TodoList = ({todo,onUpdate,onDelete}) =>{
    const[search,setSearch] = useState("");
    const onChangeSearch = (e) =>{
        setSearch(e.target.value);
    };

    const getSearchResult = () =>{
        const nonSpaceSearch = search.toLowerCase().replace(/\s/g, "");

        return search==="" ? todo :
            todo.filter((it)=>
            it.content.toLowerCase().replace(/\s/g, "").includes(nonSpaceSearch));
    };

   return(
        <div className="TodoList">
            <h4>할 일 목록 📑</h4>
            <input className='searchbar' placeholder='검색어를 입력하세요' onChange={onChangeSearch} value={search}/>
           
            <div className="TodoTitle">
                <div>완료</div>
                <div>할일</div>
                <div>마감일</div>
                <div>삭제</div>
            </div>


            <div className="list_wrapper">
                {getSearchResult().map((it) =>(
                    <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    );
}
export default TodoList;
