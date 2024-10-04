import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ChatList from "../Components/ChatList/ChatList";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const handleChatClick = (chat) => {
    // Navigate to the ChatPage and pass the chat data
    navigate("/ChatPage", { state: { selectedChat: chat } });
  };

  return (
    <div className="Main">
      <ChatList onChatClick={handleChatClick} />
    </div>
  );
}

export default MainPage;
