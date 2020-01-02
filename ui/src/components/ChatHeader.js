import React from 'react';

import closeIcon from './../assets/close.png';
import '../styles/ChatHeader.css';

function ChatPortalHeader(props) {
  return (
    <div className="header">
      <img
        className="header-icon"
        src={props.meta.icon}
        alt="User Icon"
      />
      <div className="header-title">
        <div>
          {props.meta.name}
        </div>
        <div className="status">
          {

            props.meta.status // todo: add status icon
          }
        </div>
      </div>
      <div className="header-close-button" onClick={props.onToggle}>
        <img src={closeIcon} alt="Close Chat" />
      </div>
    </div>
  );
}

export default ChatPortalHeader;
