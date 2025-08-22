import Travel_1 from '../img/triomphe.jpg';
import {Link, useNavigate} from "react-router-dom";
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleCreateTravel = () => {
        navigate('/new');
    }

 
    return (
        <div className='Home'>
            <div className='Title'>
                <h1><header>나의 여행</header></h1>
            </div>

            <div className='NewTravel'>
                <button onClick={handleCreateTravel}>새 여행 만들기</button>
            </div>
            
            <div className='Array'>
                <h5>정렬 기준: </h5>
                <select className='sort-dropdown'>
                    <option value="start-date">여행 시작일</option>
                    <option value="end-date">여행 종료일</option>
                    <option value="title">제목순</option>
                    <option value="created-date">생성일</option>
                </select>
            </div>
            <div className="Travel">
                <img src={Travel_1} alt="" width="200" />
                <Link to="/detail">유럽여행</Link>
            </div>
        </div>
    );
}

export default Home;