import React from 'react';

import DetailDescription from './DetailDescription.jsx';
import DetailColors from './DetailColors.jsx';
import DetailButtons from './DetailButtons.jsx';
import DetailDropdowns from './DetailDropdowns.jsx';

const ProductDetail = props => {
  return (
    <div className="flex-column product-detail-container">
      <DetailDescription product={props.product} />
      <DetailColors 
        colors={props.colors} 
        currentColor={props.currentColor} 
        onSwatchClick={props.onSwatchClick} 
      />
      <DetailButtons />
      <DetailDropdowns />
    </div>
  );
};

export default ProductDetail;