import React from 'react';
import '../styles/ChatToggle.css'

function ChatToggle(props) {
  return (
    <div
      className={`chat-toggle`}
      onClick={props.onToggle}
    >
      <img
        className={`chat-icon ${props.isToggled ? "icon-hidden" : ""}`}
        src="images/chat.png"
        alt="Open Chat"
      />
      <img
        className={`chat-icon ${props.isToggled ? "" : "icon-hidden"}`}
        src="images/close.png"
        alt="Close Chat"
      />
    </div>
  );
}

export default ChatToggle;
