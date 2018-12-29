import React from 'react';

const PhotoList = props => {
  return (
    <div className="photo-list-container flex-column">
      {props.photos.map((photo, i) => {
        return (
          <div key={i} onClick={() => props.onPhotoClick(photo)}>
            <a href={`#${photo.id}`}><img onClick={props.onPhotoSelect} className="photo-list clickable" src={photo.photo_url}/></a>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoList;