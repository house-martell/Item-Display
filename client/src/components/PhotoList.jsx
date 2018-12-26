import React from 'react';

const PhotoList = props => {
  return (
    <div className="flex-column">
      {props.photos.map((photo, i) => {
        return (
          <div key={i}>
            <a onClick={() => props.onPhotoClick(photo)} href={`#${photo.id}`}><img className="photo-list clickable" src={photo.photo_url}/></a>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoList;