import React, { useEffect, useState } from 'react';
import '../ChatList/ChatList.css';
import chat1 from '../icons/chat1.png';
import chat2 from '../icons/chat2.png';
import group from '../icons/group.png';
import SearchBar from '../SearchBar/SearchBar'; // Import the new SearchBar component
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats, fetchLoggedInUser } from '../../redux/chatSlice';



function ChatList({ onChatClick }) {
    
    const chats = [
        { id: 1, name: 'Alex Linderson', lastMessage: 'Hey! How are you?', time: '2:30 PM', messageCount: 2, img: chat1 },
        { id: 2, name: 'John Abraham', lastMessage: 'Let’s catch up soon!', time: '2:10 PM', messageCount: 1, img: chat1 },
        { id: 3, name: 'DEPI Project', lastMessage: 'Don’t miss to attend the meeting.', time: '12:15 PM', messageCount: 10, img: group },
        { id: 4, name: 'Sabila Sayma', lastMessage: 'How are you today?', time: '12:10 PM', messageCount: 2, img: chat2 }
    ];

    const conversations = useSelector((state) => state.chat.chats);
    const loading = useSelector((state) => state.chat.chatStatus === 'loading');
    const error = useSelector((state) => state.chat.error);
    const loggedInUser = useSelector((state) => state.chat.loggedInUser);
    const loggedInUserId = loggedInUser ? loggedInUser._id : null;
    const statues = useSelector((state) => state.room.status==="succeeded");
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchLoggedInUser());
        dispatch(fetchChats());
    }, [statues]);
    

    const groups = conversations.filter(con => con.participants.length !== 2)
    const chat121 = conversations.filter(con => con.participants.length === 2)

    // const filteredChats = conversations.filter(chat =>
    //     chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <div className="chats-view">
            <div className="chats-header">
                <h2>Chats</h2>
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>

            <div className="chats-container">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {chat121.map((chat, i) => (
                    <div className="chat-item" key={i} onClick={() => onChatClick(chat)}>
                        <img src={chat.participants[0]._id === loggedInUserId ? chat.participants[1].profilePic : chat.participants[0].profilePic} alt="Profile Picture" className="profile-pic" />
                        <div className="chat-details">
                            <h3 className="contact-name">{chat.participants[0]._id === loggedInUserId ? chat.participants[1].firstName + ' ' + chat.participants[1].lastName : chat.participants[0].firstName + ' ' + chat.participants[0].lastName}</h3>
                            <p className="last-message">{chat.messages[chat.messages.length - 1]?.content}</p>
                        </div>
                        <div className="message-info">
                            <span className="message-count">{parseInt(chat.messages.length)}</span>
                            <span className="message-time">{new Date(chat.messages[chat.messages.length - 1]?.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default ChatList;
