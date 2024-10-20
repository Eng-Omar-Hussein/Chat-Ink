import React, { useState  } from 'react';
import '../ChatList/ChatList.css';
import chat1 from '../icons/chat1.png';
import chat2 from '../icons/chat2.png';
import group from '../icons/group.png';
import SearchBar from '../SearchBar/SearchBar'; // Import the new SearchBar component



function ChatList({ onChatClick }) {
    const chats = [
        { id: 1, name: 'Alex Linderson', lastMessage: 'Hey! How are you?', time: '2:30 PM', messageCount: 2, img: chat1 },
        { id: 2, name: 'John Abraham', lastMessage: 'Let’s catch up soon!', time: '2:10 PM', messageCount: 1, img: chat1 },
        { id: 3, name: 'DEPI Project', lastMessage: 'Don’t miss to attend the meeting.', time: '12:15 PM', messageCount: 10, img: group },
        { id: 4, name: 'Sabila Sayma', lastMessage: 'How are you today?', time: '12:10 PM', messageCount: 2, img: chat2 }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="chats-view">
            <div className="chats-header">
                <h2>Chats</h2>
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>

            <div className="chats-container">
                {filteredChats.map(chat => (
                    <div className="chat-item" key={chat.id} onClick={() => onChatClick(chat)}>
                        <img src={chat.img} alt="Profile Picture" className="profile-pic" />
                        <div className="chat-details">
                            <h3 className="contact-name">{chat.name}</h3>
                            <p className="last-message">{chat.lastMessage}</p>
                        </div>
                        <div className="message-info">
                            <span className="message-count">{chat.messageCount}</span>
                            <span className="message-time">{chat.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatList;
