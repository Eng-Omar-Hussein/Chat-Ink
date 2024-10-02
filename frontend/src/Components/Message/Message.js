// src/components/Message.js
import React from 'react';
import './Message.css';

const Message = ({ content, isSender }) => {
  return (
    <div className={`message ${isSender ? 'sent' : 'received'}`}>
      <p>{content}</p>
    </div>
  );
};

export default Message;
