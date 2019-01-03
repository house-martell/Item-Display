import React from 'react';

const DetailButtons = props => {
  return (
    <div className="detail-buttons-container flex-column">
      <div className="flex-row space-between">
        <div className="size-dropdown-container flex-column">
          <div className="size-dropdown clickable" onClick={props.onSizeDropdown}>
            Size
            <span className="select-size">{props.size}</span>
          </div>
          <div className="sizes-list">
            <div name="2" className="sizes clickable" onClick={props.onSizeSelect}>2</div>
            <div name="4" className="sizes clickable" onClick={props.onSizeSelect}>4</div>
            <div name="6" className="sizes clickable" onClick={props.onSizeSelect}>6</div>
            <div name="8" className="sizes clickable" onClick={props.onSizeSelect}>8</div>
            <div name="10" className="sizes clickable" onClick={props.onSizeSelect}>10</div>
            <div name="12" className="sizes clickable" onClick={props.onSizeSelect}>12</div>
            <div name="14" className="sizes clickable" onClick={props.onSizeSelect}>14</div>
          </div>
        </div>
        <br/>
        <div className="size-guide clickable">
          Size guide
        </div>
      </div>
      <div className="button-box red-btn clickable">Add to bag</div>
      <div className="button-box white-btn clickable">Find in store</div>
      <br/>
      <div className="flex-row space-around">
        <div className="clickable">
          <img className="icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_share.png"/><span className="icon-text"> Share</span>
        </div>
        <span className="vertical-line"></span>
        <div className="clickable">
          <img className="icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_livechat.png"/><span className="icon-text"> Live Chat</span>
        </div>
        <span className="vertical-line"></span>
        <div className="clickable">
          <img className="icon" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/icon_reviews.png"/><span className="icon-text"> Reviews</span>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default DetailButtons;