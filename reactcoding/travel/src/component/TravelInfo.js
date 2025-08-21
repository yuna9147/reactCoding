import ExpandableText from './ExpandableText';
import './TravelInfo.css';



const TravelInfo = ({data}) =>{
    if(!data){
        return <div>정보가 없습니다.</div>;
    } else{
        const {city,spot,tags,tip,about,option,img} = data;
        let imgSrc;
        
        try{
            imgSrc=require(`../img/${img}`);
        } catch(err) {
            imgSrc=require(`../img/default.jpg`);
        }

        return(
            
                <div className="travelInfo">
                        <div  className="image-section" >
                            <img src= {imgSrc} />
                        </div>

                        <div className="content-section">
                            <div className="city">{city}</div>
                            <div className="spot">{spot}</div>
                            <div className="tags">
                                <span>{tags}</span> 
                                <a href="#" className="tip">운영시간</a>
                                <span className='tip-content'>{tip.split('\n').map((line,index) => (
                                        <span key={index}> {line} <br/></span>
                                    ))}</span>
                            </div>
                                <div className="about-section">
                                    <ExpandableText text={about.split('\n').map((line,index) => (
                                        <span key={index}> {line} <br/></span>
                                    ))} maxLines={2} />
                                </div>
                                <div className="option hidden">{option}</div>
                        </div>
                </div>   

        );
    }
}

export default TravelInfo;