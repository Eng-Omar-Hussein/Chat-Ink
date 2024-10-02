import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatWindow from "../Components/ChatWindow/ChatWindow";
import Navbar from "../Components/Navbar/Navbar";
import ChatList from '../Components/ChatList/ChatList';
import './ChatPage.css';

function ChatPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedChat, setSelectedChat] = useState(location.state?.selectedChat || null); // Set initial state from navigation state

    const handleBackClick = () => {
        setSelectedChat(null); // Reset selectedChat when going back
        navigate('/MainPage'); // Go back to the main page
    };

    const handleChatClick = (chat) => {
        setSelectedChat(chat); // Updates selected chat
    };

    return (
        <>
            <Navbar />
            <div className="chat-container">
                <div className="chat-list">
                    <ChatList onChatClick={handleChatClick} />
                </div>
                <div className="chat-window">
                    {selectedChat && (
                        <ChatWindow 
                            name={selectedChat.name} 
                            profilePicture={selectedChat.img} 
                            onBackClick={handleBackClick} 
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default ChatPage;
