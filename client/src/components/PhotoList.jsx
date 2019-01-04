import React from 'react';
import classNames from 'classnames';

import styles from '../../dist/styles/app.css';

const PhotoList = props => {
  return (
    <div>
      <div className={classNames(styles.photoListContainer, styles.flexColumn)}>
        {props.photos.map((photo, i) => {
          return (
            <div className={styles.initPhoto} key={i} onClick={() => props.onPhotoClick(photo)}>
              <a href={`#${photo.id}`}><img onClick={props.onPhotoSelect} className={classNames(styles.photoList, styles.clickable)} src={photo.photo_url}/></a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoList;