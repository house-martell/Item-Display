import React from 'react';
import classNames from 'classnames';

import styles from '../../dist/styles/app.css';

const DetailColors = props => {
  return (
    <div className={styles.detailColorsContainer}>
      <div className={classNames(styles.smallColors, styles.flexRow)}>
        <div className={styles.smallColorsNumber}>
          {`${props.colors.length} colours`}
        </div>
        <div className={styles.smallColorsName}>
          {`Selected: ${props.currentColor.name}`}
        </div>
      </div>
      <div className={classNames(styles.swatchContainer, styles.flexRow, styles.wrap)}>
        {props.colors.map((color, i) => {
          return (
            <div className={styles.initSwatch} key={i} onClick={() => props.onSwatchClick(color.id)}>
              <img onClick={props.onSwatchSelect} className={classNames(styles.swatch, styles.clickable)} src={color.swatch_url}/>
            </div>
          );
        })}
        <br/>
      </div>
      <div className={styles.swatchName}>
        {props.currentColor.name}
      </div>
      <br/>
    </div>
  );
};

export default DetailColors;