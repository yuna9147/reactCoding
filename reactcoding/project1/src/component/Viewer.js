const Viewer = ({count, handleReset}) =>{

    return(
    <div>
        <div>현재 카운트 <button type="button" onClick={handleReset}>초기화</button></div>
        <h1>{count}</h1>

    </div>
    );
};

export default Viewer;