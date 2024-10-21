// src/components/MessageInputContainer.js
import './MessageInputContainer.css';
import send from '../icons/send.png';
import { useState } from 'react';

function MessageInputContainer({ onSend }) {
  const [userMessage, setUserMessage] = useState('');
  const handleSend = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      onSend(userMessage);
      setUserMessage('');
    }
  };
  return (
    <div className="message-input-container ">
      <form className="input-group" onSubmit={handleSend}>
        <input
          type="text"
          className="form-control"
          id="user-message"
          placeholder="Type a message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button className="btn" type="submit" id="sendButton">
          <img src={send} alt="Send" className="send-icon" />
        </button>
      </form>
    </div>
  );
}

export default MessageInputContainer;
