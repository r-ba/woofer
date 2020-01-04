import React from 'react';

import closeIcon from './../assets/close.png';
import '../styles/Header.css';

function Header(props) {
  let iconColour = 'grey';
  if (props.data.agentStatus === 'Online') iconColour = 'green';
  else if (props.data.agentStatus === 'Away') iconColour = 'orange';

  return (
    <div className="header">
      <img
        className="header-icon"
        src={props.data.icon}
        alt="User Icon"
      />
      <div className="header-title">
        <div>
          {props.data.name}
        </div>
        <div className="status">
          <span class={`status-icon ${iconColour}`}></span>
          {
            props.data.agentStatus
          }
        </div>
      </div>
      <div className="header-close-button" onClick={props.onToggle}>
        <img src={closeIcon} alt="Close Chat" />
      </div>
    </div>
  );
}

export default Header;
