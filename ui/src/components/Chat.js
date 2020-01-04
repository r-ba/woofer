import React from 'react';
import Header from './Header';
import MessageList from './MessageList'
import Input from './Input';
import '../styles/Chat.css';

function Chat(props) {
  return (
    <div className={`chat-portal ${props.isToggled ? "" : "hidden"}`}>
      <Header
        data={props.data}
        onToggle={props.onToggle}
      />
      <MessageList
        data={props.data}
      />
      <Input
        onSubmit={props.onMessageSubmit}
      />
    </div>
  );
}

export default Chat;
