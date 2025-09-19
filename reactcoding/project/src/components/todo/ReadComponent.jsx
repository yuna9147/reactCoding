import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    tno:0,
    title:'',
    writer:'',
    dueDate:null,
    complete:false
};

const ReadComponent = ({tno}) =>{
    const [todo,setTodo] = useState(initState) ;
    const {moveToList, moveToModify} = useCustomMove();

    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data)
            setTodo(data)
        })
    },[tno])

    return(
         <div className = "border-2 border-blue-200 mt-10 m-2 p-4 rounded-xl">
            {makeDiv('Tno', todo.tno)}
            {makeDiv('Writer', todo.writer)}
            {makeDiv('Title', todo.title)}
            {makeDiv('Due Date', todo.dueDate)}
            {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}
            
            {/* buttons.........start */}
            <div className="flex justify-end p-4">
    <button 
        type="button"
        className="rounded-2xl p-3 m-2 w-28 text-xl bg-green-300 text-green-900 font-semibold shadow-md hover:bg-green-400 transition"
        onClick={() => moveToList()}
    >
        List
    </button>

    <button 
        type="button"
        className="rounded-2xl p-3 m-2 w-28 text-xl bg-yellow-200 text-yellow-900 font-semibold shadow-md hover:bg-yellow-300 transition"
        onClick={() => moveToModify(tno)}
    >
        Modify
    </button>
</div>
        </div>
    )
};

const makeDiv = (title, value) =>
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-3 text-right font-semibold text-green-800">{title}</div>
            <div className="w-4/5 p-3 rounded-2xl border border-emerald-400 bg-white shadow-md text-gray-700">
                {value}
            </div>
        </div>
    </div>

export default ReadComponent