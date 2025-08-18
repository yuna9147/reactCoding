import '../App.css';
import {useReducer} from "react";

function reducer(state,action){
    switch(action.type){
        case "plus":
            return state+action.data;
        case "minus" :
            return Math.max(state-action.data,0);
        case "init" :
            return 0;
        default:
            return state;
    }
}

const TestComponent =() => {
    const[count,dispatch] = useReducer(reducer,0);

    return(
        <div className="a">
            <h4>테스트 컴포넌트</h4>
            <div>
                <strong>{count}</strong>
            </div>
            <div className="c">
                <button type="button" onClick={()=>dispatch({type:"plus",data:1})}>+</button>{" "}
                <button type="button" onClick={()=>dispatch({type:"minus",data:1})}>-</button>{" "}
                <button type="button" onClick={()=>dispatch({type:"init"})}>초기화</button>{" "}
            </div>
        </div>
    )
};
export default TestComponent;