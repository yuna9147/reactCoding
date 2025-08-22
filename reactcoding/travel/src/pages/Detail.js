import './Detail.css';
import { useNavigate, useParams } from 'react-router-dom';
import useDetail from '../hooks/useDatil';
import PixabayImage from '../component/PixabayImage';
import { dateSeparate } from '../component/util';
import TravelInfo from '../component/TravelInfo';
import { useState } from 'react';

const Detail = () => {
    const {pid} = useParams();
    const data = useDetail(pid);
    const navigator = useNavigate();


    if(!data){
        return <div>여행 불러오는 중...</div>
    } else {
        return (
        <div className="Detail">
            <h1>{data.title}</h1>
            <div className="info_section">
                <PixabayImage city={data.city}/>
                <span class="overlay-text">{data.city}</span>
                <h3>{new Date(data.start_date).toLocaleDateString()} - {new Date(data.end_date).toLocaleDateString()}</h3>
            </div>
            <div className='category_section'>
                <button type="button" onClick={()=> navigator(`/thema/${data.pid}`)}>관심 리스트</button>
                <button type="button">여행 일정</button>
            </div>
            <div className='create_section'>
                <button type="button" onClick={()=> navigator("/detailItems")}>일정 추가</button>
            </div>
            <div className='main_section'>
                
                {dateSeparate(data.start_date, data.end_date).map((i)=>(
                    <div key={i}>
                        <h4>{i}일차</h4>
                        <TravelInfo />
                    </div>
                ))}
            </div>
        </div>
    )
    }
}

export default Detail;