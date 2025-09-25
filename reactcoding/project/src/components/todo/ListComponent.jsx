import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totoalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}


const ListComponent = () => {
    // moveToList, moveToRead 추가
    const {page, size,refresh, moveToList, moveToRead} = useCustomMove();
    const {exceptionHandle} = useCustomLogin();
    const [serverData, setServerData] = useState(initState);
    
    useEffect(() => {
        getList({page,size}).then(data => {
            console.log(data)
            setServerData(data)
        }).catch( err => exceptionHandle(err));
    }, [page,size,refresh]);
    
    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2 rounded-xl">
            <div className="flex flex-wrap mx-auto justify-center p-6 ">
                {serverData.dtoList.map(todo => 
                    <div
                        key= {todo.tno} 
                        className="w-full min-w-[400px] p-2 m-2 rounded-xl bg-blue-300 bg-opacity-15 "
                        onClick={() => moveToRead(todo.tno)} //이벤트 처리 추가 
                    >
                        <div className="flex ">
                            <div className="font-extrabold text-xl p-2 w-1/12">
                                {todo.tno}
                            </div>
                            <div className={`text-xl m-1 p-2 w-8/12 font-extrabold ${todo.complete ? "line-through text-gray-500":""}`}>

                                {todo.title}
                            </div>
                            <div className="text-xl m-1 p-2 w-2/10 font-medium">
                                {todo.dueDate}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <PageComponent 
                serverData={serverData} 
                movePage={moveToList} />
        </div>
    );
}

export default ListComponent;