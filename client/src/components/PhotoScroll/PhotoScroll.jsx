import React from 'react';
import classNames from 'classnames';

import styles from './photoScroll.css';

const PhotoScroll = props => {
  return (
    <div id={'photoScroll'} className={classNames(styles.photoScrollContainer, styles.flexColumn)}>
      {props.photos.map((photo, i) => {
        return (
          <div id={photo.id} key={i}>
            <img className={styles.photoScroll} src={photo.photo_url}/>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoScroll;