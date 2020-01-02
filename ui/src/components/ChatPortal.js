import React from 'react';
import Header from './ChatHeader';
import '../styles/ChatPortal.css';

function ChatPortal(props) {
  return (
    <div className={`chat-portal ${props.isToggled ? "" : "hidden"}`}>
      <Header
        meta={props.meta}
        onToggle={props.onToggle}
      />
    </div>
  );
}

export default ChatPortal;
