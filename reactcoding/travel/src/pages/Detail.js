import './Detail.css';
import { useParams } from 'react-router-dom';
import {useState } from 'react';
import useDetail from '../hooks/useDatil';
import PixabayImage from '../component/PixabayImage';
import Thema from './Thema';
import Schedule from './Schedule';
import Button from '../component/Button';
import Header from '../component/Header';


const Detail = () => {
    const {pid} = useParams();      // 파라미터값 pid 추출
    const data = useDetail(pid);    // pid에 해당되는 data 추출
    const [activeTab, setActiveTab] = useState("schedule"); // 기본 탭

    // 데이터 로딩 완료되면 표시   
    if(!data){
        return <div>여행 불러오는 중...</div>
    } else {

        return (
        <div className="Detail">
        <Header />
            <h1>{data.title}</h1>
           <div className="info_section">
                <PixabayImage city={data.city} />
                <h1 className='overlay-text'>{data.city}</h1>
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
                {activeTab === 'thema'? <Thema data={data.content} pid={pid} /> : <Schedule /> }
            </div>
        </div>
    )
    }
}

export default Detail;