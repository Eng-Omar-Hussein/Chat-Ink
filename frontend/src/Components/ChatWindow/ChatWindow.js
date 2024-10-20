// src/components/ChatWindow.js
import React, { useState, useEffect, useRef } from 'react';
import MessageInputContainer from '../MessageInputContainer/MessageInputContainer';
import back from '../icons/back.png'; 
import './ChatWindow.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


     

function ChatWindow({ name, profilePicture, onBackClick }) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [warning, setWarning] = useState('');
  const chatEndRef = useRef(null); // Create a ref for the chat end

  useEffect(() => {
    setMessages([]); // Clear messages when the chat changes
  }, [name, profilePicture]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format: HH:MM AM/PM
  };

  const handleSendMessage = (message) => {
    if (message.trim() === '') {
      setWarning('EMPTY MESSAGE!'); // Warning for empty message
      setTimeout(() => {
        setWarning('');
      }, 1500);
      return; // Prevent sending empty message
    }
    setWarning('');
    // Add the sent message
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, isSender: true, time: getCurrentTime() },
    ]);
  };

  const generateFakeReply = () => {
    const replies = [
      "That's interesting!",
      "Can you tell me more?",
      "I see what you mean.",
      "Absolutely!",
      "Thanks for sharing!",
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: randomReply, isSender: false, time: getCurrentTime() },
    ]);
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].isSender) {
      const timer = setTimeout(() => {
        generateFakeReply();
      }, 2000); // Fake reply after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <div className="chat-content d-flex flex-column flex-grow-1">
      <div className="chat-header d-flex align-items-center p-2">
        <img
          src={back}
          alt="Back"
          className="back-arrow me-2"
          onClick={onBackClick}
        />
        <img
          id="profilePhoto"
          src={profilePicture}
          alt="Profile Photo"
          className="rounded-circle me-2"
          width="50"
          height="50"
        />
        <h2 id="chatName" className="clickable" onClick={() => navigate('/groupParticipantsListPage')}>
          {name}
        </h2>
      </div>

     {/* Display warning message */}
{warning && (
  <div className="warning-message text-danger fw-bold mb-3 p-2 border rounded">
    {warning}
  </div>
)}

      <div id="chat-box" className="border p-2 overflow-auto " style={{borderRadius:'30px', height: '70vh', backgroundColor: '#f1f1f15d' }}>
        {/* Display messages */}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isSender ? 'sent' : 'received'} mb-2`}>
          <p>
            {msg.isSender ? <strong>You:</strong> : <strong>{name}:</strong>} {msg.content}
          </p>
          <span className="message-time">{msg.time}</span> {/* Display timestamp */}
          </div>
        

   
        ))}
        <div ref={chatEndRef} /> {/* Empty div to scroll to */}
      </div>

      <MessageInputContainer onSend={handleSendMessage} />
    </div>
  
  );
}

export default ChatWindow;
