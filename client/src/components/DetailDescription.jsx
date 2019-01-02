import React from 'react';

const DetailDescription = props => {
  return (
    <div className="detail-description-container">
      <h2 className="why-made">
        Why we made this
      </h2>
      <p className="description">
        {props.product.description}
      </p>
      <div className="horizontal-line"></div>
      <br className="break"/>
    </div>
  );
};

export default DetailDescription;