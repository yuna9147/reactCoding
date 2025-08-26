import { useContext } from "react";
import { stateContext } from "../App";

import Table from 'react-bootstrap/Table';
import BusantravelItem from "./BusantravelItem ";


const BusantravelList = () =>{
    const result = useContext(stateContext);

    return(
        <Table striped bordered hover size="sm">
            <thead>
                <tr className='text-center'>
                    <th>이미지</th>
                    <th>콘텐츠명</th>
                    <th className='table-td-width1'>구분</th>
                    <th>부제목</th>
                    <th className='table-td-width2'>교통정보</th>
                </tr>
            </thead>
            <tbody>
                {
                    result.map((item) =>(
                        <BusantravelItem key={item.UC_SEQ} {...item} />
                    ))
                }
            </tbody>
        </Table>
    );
};

export default BusantravelList;