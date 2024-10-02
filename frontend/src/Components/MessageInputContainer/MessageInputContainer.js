// src/components/MessageInputContainer.js
import './MessageInputContainer.css';
import send from '../icons/send.png';
import { useState } from 'react';

function MessageInputContainer({ onSend }) {
  const [userMessage, setUserMessage] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      onSend(userMessage);
      setUserMessage('');
    }
  };

  const handleSendClick = () => {
    onSend(message); // Call the onSend function from props
    setMessage(''); // Clear the input after sending
  };

  return (
    <div >
      <form className="message-input-container" onSubmit={handleSend}>
        <input
          type="text"
          id="user-message"
          placeholder="Type a message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button id="sendButton" type="submit" onClick={handleSendClick}>
          <img src={send} alt="Send" />
        </button>
      </form>
    </div>
  );
}

export default MessageInputContainer;
