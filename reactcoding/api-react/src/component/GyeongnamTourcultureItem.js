import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const {kakao} = window;

const mapViewer = (mapLat, mapLot,mapId) =>{
    if(mapLat==='0' && mapLot==='0'){
        alert('지도에 표시할 수 없습니다.');
        return;
    }

    const mapContainer = document.getElementById(mapId),
    mapOption={
        center: new kakao.maps.LatLng(mapLat,mapLot),
        level:3
    };

    const map = new kakao.maps.Map(mapContainer,mapOption);

    const marker = new kakao.maps.Marker({
        position:map.getCenter()
    });

    marker.setMap(map);
}



const GyeongnamTourcultureItem = ({data_title, category_name1,category_name2,data_content, telno,user_address,fileurl1,fileurl2,fileurl3,lattitude,logitude}) =>{

    const mapId = `map-${data_title.replace(/\s+/g,'-')}`;

    return(
        <Card className='mb-3'>
            <Card.Header as="h5">{data_title}</Card.Header>
            <Card.Body>
                <Card.Text className='text-end'>
                    <span className='font-size'>{category_name1}{">"}{category_name2}</span>
                </Card.Text>
                <Card.Text>
                    {telno!==''&& `☎️${telno}`}<br/>
                    {`🏢${user_address}`}
                </Card.Text>
                <Card.Text>
                    {/* {data_content} */}  
                    {<p dangerouslySetInnerHTML={{__html:data_content}}></p>}
                </Card.Text>
                <Card.Text>
                    {fileurl1 !=="" && <Image alt={category_name1} src={fileurl1} thumbnail className='fileurl' />}
                    {fileurl2 !=="" && <Image alt={category_name1} src={fileurl2} thumbnail className='fileurl' />}
                    {fileurl3 !=="" && <Image alt={category_name1} src={fileurl3} thumbnail className='fileurl' />}
                </Card.Text>
                <Button
                    variant="primary"
                    onClick={() => mapViewer(lattitude, logitude,mapId)} >
                        지도 보기
                    </Button>
                <Card.Text>
                    <div id={mapId} className='map_area'></div>
                </Card.Text>
            </Card.Body>
        </Card>
        
    );
}

export default GyeongnamTourcultureItem;