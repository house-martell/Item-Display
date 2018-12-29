import React from 'react';

import DetailName from './DetailName.jsx';
import SmallPhotoScroll from './SmallPhotoScroll.jsx';
import DetailDescription from './DetailDescription.jsx';
import DetailColors from './DetailColors.jsx';
import DetailButtons from './DetailButtons.jsx';
import DetailDropdowns from './DetailDropdowns.jsx';

const ProductDetail = props => {
  return (
    <div className="product-detail-container flex-column">
      <DetailName product={props.product} />
      <SmallPhotoScroll photos={props.photos} />
      <DetailDescription product={props.product} />
      <DetailColors 
        colors={props.colors} 
        currentColor={props.currentColor} 
        onSwatchClick={props.onSwatchClick}
        onSwatchSelect={props.onSwatchSelect}
      />
      <DetailButtons />
      <DetailDropdowns />
    </div>
  );
};

export default ProductDetail;