import axios from 'axios';
import { useEffect, useState } from "react";

const PixabayImage = ({ city, tags }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = city || tags; // city 우선, 없으면 tags
    if (!query) return;

    const fetchImages = async () => {
      const API_KEY = '51896639-b4f429885c53c29b8be38d4f6';
      const category = city ? '&category=travel' : '';
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo${category}`;

      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(url);
        setData(res.data.hits);
      } catch (err) {
        setData([]);
        setError('-- ERROR --');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [city, tags]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='PixabayImage'>
      {data.length > 0 && (
        <img
          src={data[0].webformatURL}
          alt={city || tags}
        />
      )}
    </div>
  );
};

export default PixabayImage;