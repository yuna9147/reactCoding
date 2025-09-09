import {useContext} from 'react';
import Table from 'react-bootstrap/Table';
import { BoardStateContext } from '../App';
import BoardItem from './BoardItem';

const BoardList = () => {
    const result = useContext(BoardStateContext);
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr className='text-center'>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>  
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
            {
                result.map( item => (
                    <BoardItem key={item.no} {... item}/>
                ))
            }    
            </tbody>
        </Table>
    );
};

export default BoardList;