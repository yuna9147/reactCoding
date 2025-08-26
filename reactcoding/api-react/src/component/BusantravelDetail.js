import Button from 'react-bootstrap/Button';

import Table from "react-bootstrap/esm/Table";
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom"

const BusantravelDetail = ({travel}) =>{
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    };

    return(
        <>
        <Table>
            <tbody>
                <tr>
                    <td className='table_td_width1 align-middle'>콘텐츠명</td>
                    <td>{travel.MAIN_TITLE}</td>
                </tr>
                <tr>
                    <td>구군</td>
                    <td>{travel.GUGUN_NM}</td>
                </tr>
                <tr>
                    <td>장소</td>
                    <td>{travel.PLACE}</td>
                </tr>
                  <tr>
                    <td>구분</td>
                    <td>{travel.CATE2_NM}</td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>{travel.TITLE}</td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td>{travel.ADDR1}{' '}{travel.ADDR2}</td>
                </tr>
                <tr>
                    <td>교통정보</td>
                    <td>{travel.TRFC_INFO}</td>
                </tr>
                 <tr>
                    <td colSpan={2}>
                        <Image alt={travel.SUBTITLE} src={travel.MAIN_IMG_NORMAL} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <p dangerouslySetInnerHTML={{ __html: travel.ITEMCNTNTS }}></p>
                    </td>
                </tr>
            </tbody>
        </Table>
        <div className="text-end">
            <Button variant="success" onClick={goBack}>리스트</Button>
        </div>
        </>
    )
}
export default BusantravelDetail;