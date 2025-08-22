import ExpandableText from './ExpandableText';
import './TravelInfo.css';



const TravelInfo = ({data}) =>{
    if(!data){
        return null;
    } else{
        const {city,spot,tags,tip,about,option,img} = data;
        let imgSrc;
        
        try{
            imgSrc=require(`../img/${img}`);
        } catch(err) {
            imgSrc=require(`../img/default.jpg`);
        }

          const goDetail =() =>{
                alert("안녕");
                
            }
        return(
            
                <div className="travelInfo">
                        <div  className="image-section" onClick={goDetail}>
                            <img src= {imgSrc} />
                        </div>

                        <div className="content-section">
                            <div className="city " >{city}</div>
                            <div className="spot" onClick={goDetail}> {spot}</div>
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