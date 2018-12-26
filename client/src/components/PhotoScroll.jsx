import React from 'react';

const PhotoScroll = props => {
  return (
    <div className="flex-column photo-scroll-container">
      {props.photos.map((photo, i) => {
        return (
          <div id={photo.id} key={i}>
            <img className="photo-scroll" src={photo.photo_url}/>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoScroll;