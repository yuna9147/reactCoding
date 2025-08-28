import { useContext } from "react";
import {stateContext} from '../App';
import './GyeongnamTourcultureList.css';
import GyeongnamTourcultureItem from './GyeongnamTourcultureItem';


const GyeongnamTourcultureList = () =>{
    const rows = useContext(stateContext);

    return (
        <>
        {
            rows.map((item, index) =>(
                <GyeongnamTourcultureItem key={index} {...item} />
            ))
        }
        
        </>
    )
};

export default GyeongnamTourcultureList;
