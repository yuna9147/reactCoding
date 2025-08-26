import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

const BusantravelItem =({UC_SEQ, MAIN_TITLE,MAIN_IMG_THUMB,CATE2_NM,SUBTITLE,TRFC_INFO}) =>{
    return(
        <tr className='align-middle'>
            <td>
                <Image alt={MAIN_TITLE} src={MAIN_IMG_THUMB} thumbnail className='image' />
            </td>
            <td>
                <Link to={`/detail/${UC_SEQ}`} className='link'>{MAIN_TITLE}</Link>
            </td>
            <td>{CATE2_NM}</td>
            <td>{SUBTITLE}</td>
            <td>{TRFC_INFO}</td>
        </tr>
    );
};

export default BusantravelItem ;