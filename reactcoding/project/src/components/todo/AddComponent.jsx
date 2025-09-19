import { useState } from "react"
import { postAdd } from "../../api/todoApi"
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    title:'',
    writer:'',
    dueDate:''
}

const AddComponent = () =>{
    const [todo,setTodo] = useState({...initState})
    const [result,setResult] = useState(null)
    const {moveToList} = useCustomMove()

    const handleChangeTodo =(e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }
      const handleClickAdd = () => {
        //console.log(todo);
        postAdd(todo)
        .then(result => {
            console.log(result)
            setResult(result.TNO) //결과 데이터 변경

            // 초기화 
            setTodo({...initState})
        }).catch(e => {
            console.error(e)
        });
    }

    const closeModal = () => {
        setResult(null)
        moveToList();
    }
    
    return(
        <div className="border-2 border-blue-100 mt-10 m-2 p-4  rounded-xl">
           {result ? <ResultModal title={'💡Add Result'} content={`New ${result} Added`} callbackFn={closeModal}/> : <></>} 
            
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-3 text-right font-bold">TITLE</div>
                    <input className="w-4/5 mb-4 p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:bg-blue-200"
                        name="title"
                        type={'text'}
                        value={todo.title}
                        onChange={handleChangeTodo}
                        ></input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-3 text-right font-bold">WRITER</div>
                    <input className="w-4/5 mb-4 p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:bg-blue-200"
                        name="writer"
                        type={'text'}
                        value={todo.writer}
                        onChange={handleChangeTodo}
                        ></input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-3 text-right font-bold">DUEDATE</div>
                    <input className="w-4/5 mb-4 p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:bg-blue-200"
                        name="dueDate"
                        type={'date'}
                        value={todo.dueDate}
                        onChange={handleChangeTodo}
                        ></input>
                </div>
            </div>
            
            <div className="flex justify-end gap-4">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-end">
                    <button 
                        type="button"
                        className="w-20 bg-blue-400 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={handleClickAdd}
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddComponent