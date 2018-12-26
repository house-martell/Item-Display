import React from 'react';

const DetailDescription = props => {
  if (props.product.nameline2) {
    return (
      <div>
        <h2>
          {props.product.name}
          <br/>
          {props.product.nameline2}
        </h2>
        <br/>
        <br/>
        {`${props.product.price} USD`}
        <br/>
        <br/>
        Why we made this
        <br/>
        <br/>
        {props.product.description}
        <br/>
        <br/>
        <br/>
      </div>
    );
  } else {
    return (
      <div>
        <h2>
          {props.product.name}
        </h2>
        <br/>
        <br/>
        {`${props.product.price} USD`}
        <br/>
        <br/>
        Why we made this
        <br/>
        <br/>
        {props.product.description}
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
};

export default DetailDescription;