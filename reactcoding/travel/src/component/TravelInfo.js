import ExpandableText from './ExpandableText';
import PixabayImage from '../component/PixabayImage';
import './TravelInfo.css';

const TravelInfo = ({data}) =>{
    if(!data)  return null;
   
        const {city,spot,tags,tip,about,option} = data;
       
        const goDetail =() =>{
                alert("안녕");
         };

        return(
            
                <div className="travelInfo">
                        <div  className="image-section" onClick={goDetail}>
                            {tags ? (  <PixabayImage tags={tags}/>) : (
                               <img src={require('../img/default.jpg')} alt="default" />
                            )}
                        </div>

                        <div className="content-section">
                            <div className="city " >{city}</div>
                            <div className="spot" onClick={goDetail}> {spot}</div>
                            <div className="tags">
                                <span>{tags}</span> 
                                <span className="tip">운영시간</span>
                                <span className='tip-content'>{tip.split('\n').map((line,idx) => (
                                        <span key={idx}> {line} <br/></span>
                                    ))}</span>
                            </div>
                            <div className="about">
                                <ExpandableText text={about.split('\n').map((line,idx) => (
                                    <span key={idx}> {line} <br/></span>
                                ))} maxLines={2} />
                            </div>
                            <div className="option hidden">{option}</div>
                        </div>
                </div>   

        );
    }

export default TravelInfo;