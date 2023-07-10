import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UNSPLASH_KEY = 'M8HWosVy1d7jnIpJFhrU0gmbcFq0AcpbnusSx3hKzGY';
const FetchData = (props) => {
  const [photos, setPhotos] = useState([]);
  const [viewPhoto, setViewPhoto] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      axios.get('https://api.unsplash.com/photos/random', {
        params: {
          count: 20,
          client_id: UNSPLASH_KEY,
          query: props.SearchKeyword,

        },
      }).then((response) => {
        const Result = response.data;
        setPhotos(Result);
      }).catch((error) => {
        console.error('Error fetching photos:', error);
      });
    };

    getdata();
  }, [props.SearchKeyword]);

  const handleImageClick = (ImageUrl) => {
    setViewPhoto(ImageUrl)
  }
  const handleCloseImage = () => {
    setViewPhoto(null)
  }

  return (
    <>
      <div className='img'>
        {photos.map(item => (
          <img key={item.id} src={item.urls.regular} alt={item.alt_description}
            onClick={() => handleImageClick(item.urls.full)} />
        ))}
      </div>
      {viewPhoto && (
        <div className="view-max">
          <div className="view-max-content">
            <span className="close" onClick={handleCloseImage}>&times;</span>
            <img src={viewPhoto} alt="Selected" />
          </div>
        </div>
      )}
    </>

  );
};

export default FetchData;