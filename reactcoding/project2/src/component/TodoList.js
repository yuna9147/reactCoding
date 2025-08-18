import './TodoList.css';
import TodoItem from './TodoItem'
import { useState } from 'react';

const TodoList = ({todo,onUpdate,onDelete}) =>{
    const[search,setSearch] = useState("");
    const[order,setOrder] = useState("");

    const onChangeOrder = (e) =>{
        setOrder(e.target.value);
    }

    const onChangeSearch = (e) =>{
        setSearch(e.target.value);
    };

    const getSearchResult = () =>{
        const nonSpaceSearch = search.toLowerCase().replace(/\s/g, "");

         // 1. 검색 필터 적용
    const filteredList = search === "" ? todo :
        todo.filter((it) =>
            it.content.toLowerCase().replace(/\s/g, "").includes(nonSpaceSearch)
        );

    // 2. 정렬 기준에 따라 정렬
    const sortedList = filteredList.slice(); // 복사본 생성

    if (order === "마감일") {
        sortedList.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
    } else if (order === "할일") {
        sortedList.sort((a, b) => a.content.localeCompare(b.content));
    }

    return sortedList;
    };

     

   return(
        <div className="TodoList">
            <h4>할 일 목록 📑</h4>
            <input className='searchbar' placeholder='검색어를 입력하세요' onChange={onChangeSearch} value={search}/>
           
           <div className='order'>
            <label>정렬</label>
                <select value={order} onChange={onChangeOrder}>
                    <option value="마감일">마감일순</option>
                    <option value="할일">할일순</option>
                </select>
           </div>
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
