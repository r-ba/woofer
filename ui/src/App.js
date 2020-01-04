import React, { useState, useEffect } from 'react';
import Toggle from './components/Toggle';
import Chat from './components/Chat';
import {
  fetchAgentInfo,
  statusListener,
  messageEmitter,
  messageListener
} from './chatAPI';

function App() {
  const [agentInfo, setAgentInfo] = useState({});
  const [agentStatus, setAgentStatus] = useState('');
  const [messages, setMessages] = useState([]);
  const [msgCount, setMsgCount] = useState(0);
  const [isChatVisible, setChatVisibility] = useState(false);

  const toggleChat = () => {
    setChatVisibility(!isChatVisible);
  }

  const updateMessages = (newMessage) => {
    // send message to agent
    messageEmitter(newMessage.text);
    // store and render message
    setMessages([...messages, newMessage]);
  }

  useEffect(() => {
    // GET agent information
    async function fetchData() {
      setAgentInfo(await fetchAgentInfo());
    }
    fetchData();

    // setup listener to track agent status
    statusListener(newStatus => {
      setAgentStatus(s => newStatus);
    });

    // setup listener to recieve messages from agent
    messageListener(newMessage => {
      setMessages(msgs => [...msgs, newMessage]);
      setMsgCount(count => count + 1);
    });

  }, []);

  return (
    <React.Fragment>
      <Toggle
        onToggle={toggleChat}
        isToggled={isChatVisible}
        msgCount={msgCount}
        setCount={setMsgCount}
      />
      <Chat
        data={{
          ...agentInfo,
          agentStatus,
          messages
        }}
        onToggle={toggleChat}
        isToggled={isChatVisible}
        onMessageSubmit={updateMessages}
      />
    </React.Fragment>
  );
}

export default App;
