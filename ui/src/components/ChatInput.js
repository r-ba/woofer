import React, { useState } from 'react';
import '../styles/ChatInput.css';

function ChatInput(props) {
  const [inputText, setInputText] = useState('');
  const [submitEligible, setSubmitEligible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputUpdate = text => {
    setInputText(text);
    setSubmitEligible(text !== '');
  }

  const handleSubmit = () => {
    if (submitEligible) {
      props.onSubmit({
        sender: 'consumer',
        text: inputText
      });
      setInputText('');
      setSubmitEligible(false);
    }
  }

  const handleKeyDown = keyCode => {
    // try to submit if enter key is pressed
    if (keyCode === 13) handleSubmit();
  }

  return (
    <div className="input">
      <input
        className={`input-text ${isFocused ? "active" : ""}`}
        placeholder="Say something..."
        value={inputText}
        onChange={e => handleInputUpdate(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={e => handleKeyDown(e.keyCode)}
      />
      <div
        className={`input-submit ${submitEligible ? "eligible" : "ineligible"}`}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default ChatInput;
