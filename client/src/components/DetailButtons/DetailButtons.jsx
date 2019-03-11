import React from 'react';
import classNames from 'classnames';

import styles from './detailButtons.css';

const DetailButtons = props => {
  let sizes = [];
  for (let i = 0; i <= 14; i += 2) {
    sizes.push(<div name={i} key={i} className={classNames(styles.sizes, styles.clickable)} onClick={props.onSizeSelect}>{i}</div>);
  }
  
  return (
    <div className={classNames(styles.detailButtonsContainer, styles.flexColumn)}>
      <div className={classNames(styles.flexRow, styles.spaceBetween)}>
        <div className={classNames(styles.sizeDropdownContainer, styles.flexColumn)}>
          <div className={classNames(styles.sizeDropdown, styles.clickable)} onClick={props.onSizeDropdown}>
            Size
            <span className={styles.selectSize}>{props.size}</span>
          </div>
          <div className={styles.sizesList}>
            {sizes}
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