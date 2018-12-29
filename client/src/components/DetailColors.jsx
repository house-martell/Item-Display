import React from 'react';

const DetailColors = props => {
  return (
    <div className="detail-colors-container">
      <div className="flex-row wrap">
        {props.colors.map((color, i) => {
          return (
            <div key={i} onClick={() => props.onSwatchClick(color.id)}>
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