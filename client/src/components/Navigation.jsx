import React from 'react';

const Navigation = props => {
  return (
    <div className="nav flex-row">
      <div className="flex-row">
        <img className="logo clickable" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/lulumelon_logo.png"/>
        <div className="nav-directory flex-row space-between">
          <div className="nav-selection clickable">Women</div>
          <div className="nav-selection clickable">Men</div>
          <div className="nav-selection clickable">Girls</div>
          <div className="nav-selection clickable">Collections</div>
          <div className="nav-selection clickable">Community</div>
        </div>
      </div>
      <div className="flex-row">
        <div className="nav-buttons flex-row space-between">
          <span className="sign-in clickable">Sign In</span>
          <img className="search clickable" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/search_icon.png"/>
          <img className="shopping-bag clickable" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/bag_icon.png"/>
          <img className="drop-menu clickable" src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/drop_icon.png"/>
        </div>
      </div>
    </div>
  );
};

export default Navigation;