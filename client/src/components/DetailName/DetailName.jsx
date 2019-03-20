import React from 'react';

import styles from './detailName.css';

const DetailName = props => {
  return (
    <div className={styles.detailNameContainer}>
      <h1>
        {props.product.name}
        <br/>
        {props.product.nameline2}
      </h1>
      <br/>
      <div className={styles.totalPrice}>
        <span className={styles.price}>
          {props.product.price}
        </span>
        <span className={styles.currency}> USD</span>
      </div>
    </div>
  );
};

export default DetailName;