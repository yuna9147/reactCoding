const InputForm = ({ title, children, onSubmit, handleClose, isEdit, setIsEdit }) => {
    return (
        <div className="New">
            <h1>{title}</h1>
            <div className="input_section">
                {children}
            </div>
            <div className="button_section">
                {isEdit ? <button id="updateBtn" type="button" onClick={onSubmit}>수정하기</button>
                        : <button id="createBtn" type="button" onClick={onSubmit}>생성하기</button>
                }
                <button id="cancelBtn" type="button" onClick={()=> {setIsEdit(false); handleClose();}}>취소하기</button>
            </div>
        </div>
    )
}

export default InputForm;
