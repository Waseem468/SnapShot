import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FLICKR_API_KEY = '77ef5dbbaec2ab5bcf386338ad08283f';

const FetchData = (props) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get('https://api.flickr.com/services/rest', {
        params: {
          method: 'flickr.photos.search',
          api_key: FLICKR_API_KEY,
          text: props.SearchKeyword,
          format: 'json',
          nojsoncallback: 1,
          per_page: 20,
        },
      });
      setPhotos(response.data.photos.photo)
    };

    getdata();
  }, [props.SearchKeyword]);

  return (
    <div className='img'>
      {photos.map(item => (
        <img key={item.id} src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={item.title} />
      ))}
    </div>
  );
};

export default FetchData;