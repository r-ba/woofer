import React, { useState } from 'react';
import ChatToggle from './components/ChatToggle';
import ChatPortal from './components/ChatPortal';

function App() {
  // const [isChatVisible, setChatVisibility] = useState(false);
  const [isChatVisible, setChatVisibility] = useState(true); // dev

  const toggleChat = () => {
    setChatVisibility(!isChatVisible);
  }

  return (
    <React.Fragment>
      <ChatToggle
        onToggle={toggleChat}
        isToggled={isChatVisible}
      />
      <ChatPortal
        isToggled={isChatVisible}
      />
    </React.Fragment>
  );
}

export default App;
