import './TodoItem.css'

const TodoItem = () => {
    return(
        <div className="TodoItem">
            <div className="checkbox">
                <input type="checkbox" />
            </div>
            <div className="title" >
              할 일 ㅋ
            </div>
            <div className='date'>
                {new Date().toLocaleDateString()}
            </div>
            <div className="btn">
            <button type="button" >삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;