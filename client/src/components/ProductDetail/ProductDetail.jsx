import React from 'react';
import classNames from 'classnames';

import DetailName from '../DetailName/DetailName.jsx';
import SmallPhotoScroll from '../PhotoScroll/SmallPhotoScroll.jsx';
import DetailDescription from '../DetailDescription/DetailDescription.jsx';
import DetailColors from '../DetailColors/DetailColors.jsx';
import DetailButtons from '../DetailButtons/DetailButtons.jsx';
import DetailDropdowns from '../DetailDropdowns/DetailDropdowns.jsx';
import styles from './productDetail.css';

const ProductDetail = props => {
  return (
    <div className={classNames(styles.productDetailContainer, styles.flexColumn)}>
      <DetailName
        product={props.product}
      />
      <SmallPhotoScroll
        photos={props.photos}
      />
      <DetailDescription
        product={props.product}
      />
      <DetailColors 
        colors={props.colors} 
        currentColor={props.currentColor} 
        onSwatchClick={props.onSwatchClick}
        onSwatchSelect={props.onSwatchSelect}
      />
      <DetailButtons
        size={props.size}
        onSizeDropdown={props.onSizeDropdown}
        onSizeSelect={props.onSizeSelect} 
      />
      <DetailDropdowns
        product={props.product}
        fabrics={props.fabrics}
        features={props.features}
        onDropdownClick={props.onDropdownClick}
      />
    </div>
  );
};

export default ProductDetail;