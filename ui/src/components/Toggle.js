import React from 'react';

import openChatIcon from '../assets/chat.png';
import closeChatIcon from '../assets/close.png';
import '../styles/Toggle.css'

function Toggle(props) {
  const toggleIcon = isOpen => isOpen ? "icon-hidden" : "";
  return (
    // todo; add new message count icon
    <div
      className={`chat-toggle`}
      onClick={props.onToggle}
    >
      <img
        className={`chat-icon ${toggleIcon(props.isToggled)}`}
        src={openChatIcon}
        alt="Open Chat"
      />
      <img
        className={`chat-icon ${toggleIcon(!props.isToggled)}`}
        src={closeChatIcon}
        alt="Close Chat"
      />
    </div>
  );
}

export default Toggle;
