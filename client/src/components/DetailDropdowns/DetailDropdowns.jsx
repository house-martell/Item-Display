import React from 'react';
import classNames from 'classnames';

import styles from '../App/app.css';

const DetailDropdowns = props => {
  if (props.fabrics.length > 0) {
    return (
      <div className={styles.detailDropdownsContainer}>
        <button className={classNames(styles.dropdown, styles.plus, styles.clickable)} onClick={props.onDropdownClick}>Fabric</button> 
        <div className={styles.dropdownInfo}>
          <div className={classNames(styles.animated, styles.bounce)}>
            <h3>
              {props.product.fabric_name}
            </h3>
            <p>
              {props.product.fabric_description}
            </p>
            <div className={styles.horizontalLine}></div>
            <br/>
            {props.fabrics.map((fabric, i) => {
              return (
                <div className={styles.fabricBenefit} key={i}>{fabric.fabric_benefit}</div>
              );
            })}
          </div>
        </div>
        <button className={classNames(styles.dropdown, styles.plus, styles.clickable)} onClick={props.onDropdownClick}>Care</button>
        <div className={styles.dropdownInfo}>
          <div className={classNames(styles.animated, styles.bounce)}>
            Wash with like colours
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_machinewash.png"/><span className={styles.careIconText}> Machine wash cold</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_bleach.png"/><span className={styles.careIconText}> Do not bleach</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_tumble.png"/><span className={styles.careIconText}> Tumble dry low</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_iron.png"/><span className={styles.careIconText}> Do not iron</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_dryclean.png"/><span className={styles.careIconText}> Do not dry clean</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            Imported
          </div>
        </div>
        <button className={classNames(styles.dropdown, styles.plus, styles.clickable)} onClick={props.onDropdownClick}>Features</button>
        <div className={styles.dropdownInfo}>
          <div className={classNames(styles.animated, styles.bounce)}>
            <div className={classNames(styles.features, styles.flexColumn)}>
              {props.features.map((feature, i) => {
                return (
                  <div className={styles.flexRow} key={i}>
                    <div className={styles.featureName}>{feature.feature_name}</div>
                    <div className={styles.featureDescription}>{feature.feature_description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.detailDropdownsContainer}>
        <button className={classNames(styles.dropdown, styles.plus, styles.clickable)} onClick={props.onDropdownClick}>Fabric</button> 
        <div className={styles.dropdownInfo}>
          <div className={classNames(styles.animated, styles.bounce)}>
            <h3>
              {props.product.fabric_name}
            </h3>
            <p>
              {props.product.fabric_description}
            </p>
          </div>
        </div>
        <button className={classNames(styles.dropdown, styles.plus, styles.clickable)} onClick={props.onDropdownClick}>Care</button>
        <div className={styles.dropdownInfo}>
          <div className={classNames(styles.animated, styles.bounce)}>
            Wash with like colours
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_machinewash.png"/><span className={styles.careIconText}> Machine wash cold</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_bleach.png"/><span className={styles.careIconText}> Do not bleach</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_tumble.png"/><span className={styles.careIconText}> Tumble dry low</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_iron.png"/><span className={styles.careIconText}> Do not iron</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            <img className={styles.careIcon} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_dryclean.png"/><span className={styles.careIconText}> Do not dry clean</span>
          </div>
          <div className={classNames(styles.animated, styles.bounce)}>
            Imported
          </div>
        </div>
        <button className={classNames(styles.dropdown, styles.plus, styles.clickable)} onClick={props.onDropdownClick}>Features</button>
        <div className={styles.dropdownInfo}>
          <div className={classNames(styles.animated, styles.bounce)}>
            <div className={classNames(styles.features, styles.flexColumn)}>
              {props.features.map((feature, i) => {
                return (
                  <div className={styles.flexRow} key={i}>
                    <div className={styles.featureName}>{feature.feature_name}</div>
                    <div className={styles.featureDescription}>{feature.feature_description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailDropdowns;