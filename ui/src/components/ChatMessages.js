import React, { useRef, useEffect } from 'react';
import '../styles/ChatMessages.css';

function ChatMessages(props) {
  const listBottom = useRef(null);

  useEffect(() => {
    listBottom.current.scrollIntoView({ behavior: 'smooth' });
  }, [props.data.messages]);

  const messageList = props.data.messages.map((msg, key) => {
    return (
      <div className={`message ${msg.sender}`} key={key}>
        { msg.text }
        <div ref={listBottom} />
      </div>
    );
  });

  return (
    <div className="message-list">
      { messageList }
    </div>
  );
}

export default ChatMessages;
