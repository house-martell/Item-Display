import React from 'react';

const DetailDescription = props => {
  return (
    <div className="detail-description-container">
      <h2>
        Why we made this
      </h2>
      <p>
        {props.product.description}
      </p>
      <div className="horizontal-line"></div>
      <br/>
    </div>
  );
};

export default DetailDescription;