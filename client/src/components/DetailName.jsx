import React from 'react';

const DetailName = props => {
  if (props.product.nameline2) {
    return (
      <div className="detail-name-container">
        <h1>
          {props.product.name}
          <br/>
          {props.product.nameline2}
        </h1>
        <br/>
        <div>
          <span className="price">
            {props.product.price}
          </span>
          <span className="currency"> USD</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="detail-name-container">
        <h1>
          {props.product.name}
        </h1>
        <br/>
        <div>
          <span className="price">
            {props.product.price}
          </span>
          <span className="currency"> USD</span>
        </div>
      </div>
    );
  }
};

export default DetailName;