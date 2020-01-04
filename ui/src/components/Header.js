import React from 'react';

import closeIcon from './../assets/close.png';
import '../styles/Header.css';

function Header(props) {

  let status;
  const agentStatus = props.data.agentStatus;

  if (agentStatus) {
    let iconColour = 'grey';
    if (agentStatus === 'Online') iconColour = 'green';
    else if (agentStatus === 'Away') iconColour = 'orange';
    const statusIcon = <span className={`status-icon ${iconColour}`}></span>;
    status = <div className="status">{statusIcon}{agentStatus}</div>;
  }

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
        { status }
      </div>
      <div className="header-close-button" onClick={props.onToggle}>
        <img src={closeIcon} alt="Close Chat" />
      </div>
    </div>
  );
}

export default Header;
