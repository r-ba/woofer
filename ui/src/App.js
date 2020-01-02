import React, { useState } from 'react';
import ChatToggle from './components/ChatToggle';
import ChatPortal from './components/ChatPortal';

const metaData = {
  icon: "images/user.png",
  name: 'Username',
  status: 'Offline',
  unseenMessage: false
}

function App() {
  const [isChatVisible, setChatVisibility] = useState(true);

  const toggleChat = () => {
    setChatVisibility(!isChatVisible);
  }

  return (
    <React.Fragment>
      <ChatToggle
        meta={metaData}
        onToggle={toggleChat}
        isToggled={isChatVisible}
      />
      <ChatPortal
        meta={metaData}
        onToggle={toggleChat}
      />
    </React.Fragment>
  );
}

export default App;
