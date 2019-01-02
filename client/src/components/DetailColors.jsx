import React from 'react';

const DetailColors = props => {
  return (
    <div className="detail-colors-container">
      <div className="small-colors flex-row">
        <div className="small-colors-number">
          {`${props.colors.length} colours`}
        </div>
        <div className="small-colors-name">
          {`Selected: ${props.currentColor.name}`}
        </div>
      </div>
      <div className="swatch-container flex-row wrap">
        {props.colors.map((color, i) => {
          return (
            <div className="init-swatch" key={i} onClick={() => props.onSwatchClick(color.id)}>
              <img onClick={props.onSwatchSelect} className="swatch clickable" src={color.swatch_url}/>
            </div>
          );
        })}
        <br/>
      </div>
      <div className="swatch-name">
        {props.currentColor.name}
      </div>
      <br/>
    </div>
  );
};

export default DetailColors;