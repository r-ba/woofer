import React, { useRef, useEffect } from 'react';
import '../styles/MessageList.css';

function MessageList(props) {
  const listBottom = useRef(null);

  useEffect(() => {
    if (listBottom.current !== null) listBottom.current.scrollIntoView({ behavior: 'smooth' });
  }, [props.data.messages]);

  const messageList = props.data.messages.map((msg, key) => {
    return (
      <div className={`message ${msg.sender}`} key={key}>
        { msg.text }
      </div>
    );
  });

  return (
    <div className="message-list">
      { messageList }
      <div ref={listBottom} />
    </div>
  );
}

export default MessageList;
