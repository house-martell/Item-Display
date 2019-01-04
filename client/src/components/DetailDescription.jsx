import React from 'react';

import styles from '../../dist/styles/detailDescription.css';

const DetailDescription = props => {
  return (
    <div className={styles.detailDescriptionContainer}>
      <h2 className={styles.whyMade}>
        Why we made this
      </h2>
      <p className={styles.description}>
        {props.product.description}
      </p>
      <div className={styles.horizontalLine}></div>
      <br className={styles.break}/>
    </div>
  );
};

export default DetailDescription;