import React, { useState, useEffect } from 'react';
import Toggle from './components/Toggle';
import Chat from './components/Chat';
import { statusListener, messageListener, messageEmitter, fetchAgentInfo } from './chatAPI';

function App() {
  const [agentInfo, setAgentInfo] = useState({});
  const [agentStatus, setAgentStatus] = useState('');
  const [messages, setMessages] = useState([]);
  const [isChatVisible, setChatVisibility] = useState(true);

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
    });

  }, []);

  return (
    <React.Fragment>
      <Toggle
        data={agentInfo}
        onToggle={toggleChat}
        isToggled={isChatVisible}
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
