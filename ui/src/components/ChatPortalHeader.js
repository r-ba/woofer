import React from 'react';
import '../styles/ChatPortalHeader.css';

function ChatPortalHeader(props) {
  return (
    <div className="header-container">
      <div className="header">
        <img
          className="header-icon"
          src={"images/user.png"}
          alt="User Icon"
        />
      </div>
    </div>
  );
}

export default ChatPortalHeader;
