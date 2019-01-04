import React from 'react';
import classNames from 'classnames';

import styles from '../../dist/styles/app.css';

const DetailButtons = props => {
  return (
    <div className={classNames(styles.detailButtonsContainer, styles.flexColumn)}>
      <div className={classNames(styles.flexRow, styles.spaceBetween)}>
        <div className={classNames(styles.sizeDropdownContainer, styles.flexColumn)}>
          <div className={classNames(styles.sizeDropdown, styles.clickable)} onClick={props.onSizeDropdown}>
            Size
            <span className={styles.selectSize}>{props.size}</span>
          </div>
          <div className={styles.sizesList}>
            <div name="2" className={classNames(styles.sizes, styles.clickable)} onClick={props.onSizeSelect}>2</div>
            <div name="4" className={classNames(styles.sizes, styles.clickable)} onClick={props.onSizeSelect}>4</div>
            <div name="6" className={classNames(styles.sizes, styles.clickable)} onClick={props.onSizeSelect}>6</div>
            <div name="8" className={classNames(styles.sizes, styles.clickable)} onClick={props.onSizeSelect}>8</div>
            <div name="10" className={classNames(styles.sizes, styles.clickable)} onClick={props.onSizeSelect}>10</div>
            <div name="12" className={classNames(styles.sizes, styles.clickable)} onClick={props.onSizeSelect}>12</div>
            <div name="14" className={classNames(styles.sizes, styles.clickable)} onClick={props.onSizeSelect}>14</div>
          </div>
        </div>
        <br/>
        <div className={classNames(styles.sizeGuide, styles.clickable)}>
          Size guide
        </div>
      </div>
      <div className={classNames(styles.buttonBox, styles.redBtn, styles.clickable)}>Add to bag</div>
      <div className={classNames(styles.buttonBox, styles.whiteBtn, styles.clickable)}>Find in store</div>
      <br/>
      <div className={classNames(styles.flexRow, styles.spaceAround)}>
        <div className={styles.clickable}>
          <img className={styles.icon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_share.png"/><span className={styles.iconText}> Share</span>
        </div>
        <span className={styles.verticalLine}></span>
        <div className={styles.clickable}>
          <img className={styles.icon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_livechat.png"/><span className={styles.iconText}> Live Chat</span>
        </div>
        <span className={styles.verticalLine}></span>
        <div className={styles.clickable}>
          <img className={styles.icon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_reviews.png"/><span className={styles.iconText}> Reviews</span>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default DetailButtons;