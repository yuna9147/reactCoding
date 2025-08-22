import axios from 'axios';
import { useEffect, useState } from "react";

/* 픽사베이 API 사용하여 사진 불러오기 */
const PixabayImage = ({city}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!city) return;

        const API_KEY = '51896639-b4f429885c53c29b8be38d4f6'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${city}&image_type=photo&category=travel`
        
        setLoading(true);
        setError(null);

        axios.get(url)
            .then(res => {
                setData(res.data.hits)
                setLoading(false)
            })
            .catch(error => {
                setData([])
                setLoading(false)
                setError('-- ERROR --')
            })
    }, [city]);

    return(
        <div className='PixabayImage'>
            {data.length > 0 && (
                <img
                    src={data[0].webformatURL}
                    alt={city}
                />
               
            )} 
        </div>
    )
}

export default PixabayImage;