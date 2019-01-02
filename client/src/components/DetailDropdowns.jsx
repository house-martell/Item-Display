import React from 'react';

const DetailDropdowns = props => {
  if (props.fabrics.length > 0) {
    return (
      <div className="detail-dropdowns-container">
        <button className="dropdown plus clickable" onClick={props.onDropdownClick}>Fabric</button> 
        <div className="dropdown-info">
          <div className="animated bounce">
            <h3>
              {props.product.fabric_name}
            </h3>
            <p>
              {props.product.fabric_description}
            </p>
            <div className="horizontal-line"></div>
            <br/>
            {props.fabrics.map((fabric, i) => {
              return (
                <div className="fabric-benefit" key={i}>{fabric.fabric_benefit}</div>
              );
            })}
          </div>
        </div>
        <button className="dropdown plus clickable" onClick={props.onDropdownClick}>Care</button>
        <div className="dropdown-info">
          <div className="animated bounce">
            Wash with like colours
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_machinewash.png"/><span className="care-icon-text"> Machine wash cold</span>
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_bleach.png"/><span className="care-icon-text"> Do not bleach</span>
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_tumble.png"/><span className="care-icon-text"> Tumble dry low</span>
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_iron.png"/><span className="care-icon-text"> Do not iron</span>
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_dryclean.png"/><span className="care-icon-text"> Do not dry clean</span>
          </div>
          <div className="animated bounce">
            Imported
          </div>
        </div>
        <button className="dropdown plus clickable" onClick={props.onDropdownClick}>Features</button>
        <div className="dropdown-info">
          <div className="animated bounce">
            <div className="features flex-column">
              {props.features.map((feature, i) => {
                return (
                  <div className="flex-row">
                    <div className="feature-name" key={i}>{feature.feature_name}</div>
                    <div className="feature-description" key={i}>{feature.feature_description}</div>
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
      <div className="detail-dropdowns-container">
        <button className="dropdown plus clickable" onClick={props.onDropdownClick}>Fabric</button> 
        <div className="dropdown-info">
          <div className="animated bounce">
            <h3>
              {props.product.fabric_name}
            </h3>
            <p>
              {props.product.fabric_description}
            </p>
          </div>
        </div>
        <button className="dropdown plus clickable" onClick={props.onDropdownClick}>Care</button>
        <div className="dropdown-info">
          <div className="animated bounce">
            Wash with like colours
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_machinewash.png"/><span className="care-icon-text"> Machine wash cold</span>
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_bleach.png"/><span className="care-icon-text"> Do not bleach</span>
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_tumble.png"/><span className="care-icon-text"> Tumble dry low</span>
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_iron.png"/><span className="care-icon-text"> Do not iron</span>
          </div>
          <div className="animated bounce">
            <img className="care-icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_dryclean.png"/><span className="care-icon-text"> Do not dry clean</span>
          </div>
          <div className="animated bounce">
            Imported
          </div>
        </div>
        <button className="dropdown plus clickable" onClick={props.onDropdownClick}>Features</button>
        <div className="dropdown-info">
          <div className="animated bounce">
            <div className="features flex-column">
              {props.features.map((feature, i) => {
                return (
                  <div className="flex-row">
                    <div className="feature-name" key={i}>{feature.feature_name}</div>
                    <div className="feature-description" key={i}>{feature.feature_description}</div>
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