import React from 'react';

import styles from '../../dist/styles/app.css';

const DetailName = props => {
  if (props.product.nameline2) {
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
  } else {
    return (
      <div className={styles.detailNameContainer}>
        <h1>
          {props.product.name}
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
  }
};

export default DetailName;