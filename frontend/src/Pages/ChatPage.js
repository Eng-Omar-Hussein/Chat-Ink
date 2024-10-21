import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChatWindow from "../Components/ChatWindow/ChatWindow";
import ChatList from "../Components/ChatList/ChatList";
import "./ChatPage.css";
import { useSelector } from "react-redux";

function ChatPage() {
  const loggedInUser = useSelector((state) => state.chat.loggedInUser);
  const loggedInUserId = loggedInUser ? loggedInUser._id : null;
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(
    location.state?.selectedChat || null
  ); // Set initial state from navigation state
  const handleBackClick = () => {
    setSelectedChat(null); // Reset selectedChat when going back
    navigate("/MainPage"); // Go back to the main page
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat); // Updates selected chat
  };

  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-4 col-lg-4 border-end chat-list">
          <ChatList onChatClick={handleChatClick} />
        </div>
        <div className=" chat-window">
          {selectedChat && (
            <ChatWindow
              name={selectedChat.participants[0]._id===loggedInUserId? selectedChat.participants[1].firstName+' '+selectedChat.participants[1].lastName:selectedChat.participants[0].firstName+' '+selectedChat.participants[0].lastName}
              profilePicture={selectedChat.participants[0]._id===loggedInUserId? selectedChat.participants[1].profilePic:selectedChat.participants[0].profilePic}
              onBackClick={handleBackClick}
              roomName={selectedChat._id}
              chats= {selectedChat.messages}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
