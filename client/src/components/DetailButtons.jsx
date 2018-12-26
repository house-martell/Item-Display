import React from 'react';

const DetailButtons = props => {
  return (
    <div className="flex-column">
      <div className="flex-row">
        <label className="button-box">Size
          <select name="Size">
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
          </select>
        </label>
        <span>
            Size guide
        </span>
      </div>
      <div className="button-box red-btn clickable">Add to bag</div>
      <div className="button-box white-btn clickable">Find in store</div>
      <br/>
      <div className="flex-row spaced">
        <div className="clickable">
          <img className="icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_share.png"/><span className="icon-text"> Share</span>
        </div>
        <div className="clickable">
          <img className="icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_livechat.png"/><span className="icon-text"> Live Chat</span>
        </div>
        <div className="clickable">
          <img className="icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_reviews.png"/><span className="icon-text"> Reviews</span>
        </div>
      </div>
      <br/>
    </div>
  );  // FIX THIS ^
};

export default DetailButtons;