import React from 'react';
import classNames from 'classnames';

import styles from '../../dist/styles/app.css';

const SmallPhotoScroll = props => {
  return (
    <div className={classNames(styles.smallPhotoScrollContainer, styles.flexRow)}>
      {props.photos.map((photo, i) => {
        return (
          <div className={styles.scrolling} id={photo.id} key={i}>
            <img className={styles.smallPhotoScroll} src={photo.photo_url}/>
          </div>
        );
      })}
    </div>
  );
};

export default SmallPhotoScroll;