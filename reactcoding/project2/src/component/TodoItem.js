import './TodoItem.css'

const TodoItem = ({id, content, isDone, createdDate,onUpdate,onDelete}) => {
    const onChangeCheckbox = () =>{
        onUpdate(id);
    };

    const onClickDelete = () =>{
        onDelete(id);
    };

    return(
        <div className="TodoItem">
            <div className="checkbox">
                <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} id={`checkbox-${id}`}/>
            </div>
            <div className="title" >
                <label for={`checkbox-${id}`}>{content}</label>
            </div>
            <div className='date'>
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="btn">
            <button type="button" onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;