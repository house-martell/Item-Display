import React from 'react';

const SmallPhotoScroll = props => {
  return (
    <div className="small-photo-scroll-container">
      {props.photos.map((photo, i) => {
        return (
          <div id={photo.id} key={i}>
            <img className="small-photo-scroll" src={photo.photo_url}/>
          </div>
        );
      })}
    </div>
  );
};

export default SmallPhotoScroll;