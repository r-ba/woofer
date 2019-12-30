import React from 'react';
import ChatPortalHeader from './ChatPortalHeader';
import '../styles/ChatPortal.css';

function ChatPortal(props) {
  return (
    <div className={`chat-portal ${props.isToggled ? "" : "hidden"}`}>
      <ChatPortalHeader />
    </div>
  );
}

export default ChatPortal;
