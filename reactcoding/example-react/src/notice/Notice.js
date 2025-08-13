import './Notice.css'

const Notice = ({no,title,writer,writeDate}) => {

    const handleOnClick = () =>{
        window.open(`/notice/${no}`,'_blank','width=600,height=800px');
    };

    return(
        <>
            <div className="list-section" onClick={handleOnClick}>
                <div className="no">
                    <div>{no}</div>
                </div>

                <div className="title">
                    <div>{title}</div>
                </div>

                <div className="writer">
                    <div>{writer}</div>
                </div>

                <div className="date">
                    <div>{new Date(writeDate).toLocaleDateString()}</div>
                </div>
            </div>
        </>
    );
}

export default Notice;