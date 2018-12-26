import React from 'react';

const DetailColors = props => {
  return (
    <div>
      <div className="flex-row wrap">
        {props.colors.map((color, i) => {
          return (
            <div key={i} onClick={() => props.onSwatchClick(color.id)}>
              <img className="swatch clickable" src={color.swatch_url}/>
            </div>
          );
        })}
        <br/>
      </div>
      <div>
        {props.currentColor.name}
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default DetailColors;