import './Notice.css'


const Notice = ({no,title,writer,writeDate,content,selectedNo,setSelectedNo,onDelete,onModify,important}) => {

    const isOpen = selectedNo === no;

    const handleOnClick =() =>{
        setSelectedNo(state => state ===no? null:no);
    };

    const onClickModify = () =>{
       onModify(no);
    };

     const onClickDelete = () =>{
        onDelete(no);
    };

    return(
        <>
            <div className="list-section" onClick={handleOnClick}>
                <div className="no">
                    <div>{no}</div>
                </div>

                <div className="title">
                    <div className={`inputTitle ${important ? 'importantTitle' : ''}`}>{title}</div>
                </div>

                <div className="writer">
                    <div>{writer}</div>
                </div>

                <div className="date">
                    <div>{new Date(writeDate).toLocaleDateString()}</div>
                </div>
            </div>
                <div>
            {isOpen &&(
                <div className="content-area">
                    <div>{content}</div>
                    <div className="contentBtn">
                        <button type="button" className="modifyBtn" onClick={onClickModify}>수정</button>
                        <button type="button" className="deleteBtn" onClick={onClickDelete}>삭제</button>
                    </div>
                </div>
                
            )}
            </div>
        </>
    );
}

export default Notice;