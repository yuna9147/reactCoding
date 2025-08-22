import './Detail.css';
import { useParams } from 'react-router-dom';
import useDetail from '../hooks/useDatil';
import PixabayImage from '../component/PixabayImage';
import { useState } from 'react';
import Thema from './Thema';
import Schedule from './Schedule';
import Button from '../component/Button';

const Detail = () => {
    const {pid} = useParams();
    const data = useDetail(pid);
    const [activeTab, setActiveTab] = useState("schedule"); // 기본 탭

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
        

            {/* 내용추가 */}
            <div className="category_section">
                <Button
                    text="관심 리스트"
                    isActive={activeTab === 'thema'}
                    onClick={() => setActiveTab('thema')}
                />
                <Button
                    text="여행 일정"
                    isActive={activeTab === 'schedule'}
                    onClick={() => setActiveTab('schedule')}
                />
            </div>
   
             {/* 하단 콘텐츠 영역 */}
            <div className="content_section">
                {activeTab === 'thema'? <Thema data={data.content} pid={pid}/> : <Schedule /> }
            </div>
        </div>
    )
    }
}

export default Detail;