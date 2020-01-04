import React from 'react';
import openChatIcon from '../assets/chat.png';
import closeChatIcon from '../assets/close.png';
import '../styles/Toggle.css'

function Toggle(props) {
  const count = props.isToggled ? 0 : props.msgCount;
  const toggleIcon = isOpen => isOpen ? "icon-hidden" : "";
  return (
    <div
      className="chat-toggle"
      onClick={() => {
        // reset message count on window toggle
        props.setCount(0);
        props.onToggle();
      }}
    >
      <div className={`new-msg-count ${count ? "" : "hidden"}`}>
        {count}
      </div>
      <img
        className={`chat-icon ${toggleIcon(props.isToggled)}`}
        src={openChatIcon}
        alt="Open Chat"
      />
      <img
        className={`chat-icon open ${toggleIcon(!props.isToggled)}`}
        src={closeChatIcon}
        alt="Close Chat"
      />
    </div>
  );
}

export default Toggle;
