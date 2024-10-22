import React, { useEffect, useState } from "react";
import "../ChatList/ChatList.css";

import SearchBar from "../SearchBar/SearchBar"; // Import the new SearchBar component
import { useDispatch, useSelector } from "react-redux";
import { fetchChats, fetchLoggedInUser } from "../../redux/chatSlice";

function ChatList({ onChatClick }) {
 
  const conversations = useSelector((state) => state.chat.chats);
  const loading = useSelector((state) => state.chat.chatStatus === "loading");
  const error = useSelector((state) => state.chat.error);
  const loggedInUser = useSelector((state) => state.chat.loggedInUser);
  const loggedInUserId = loggedInUser ? loggedInUser._id : null;
  const statues = useSelector((state) => state.room.status === "succeeded");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUser());
    dispatch(fetchChats());
  }, [statues]);

  const groups = conversations.filter((con) => con.participants.length !== 2);
  const chat121 = conversations.filter((con) => con.participants.length === 2);


    // Filter chats based on the search term 
    const filteredChats = chat121.filter((chat) => {
      const participant = chat.participants.find((p) => p._id !== loggedInUserId);
      const fullName = `${participant.firstName} ${participant.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });

  return (
    <div>
      <div className="chats-view">
        <div className="chats-header">
          <h2>Chats</h2>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <div className="chats-container">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {filteredChats.map((chat, i) => (
            <div
              className="chat-item"
              key={i}
              onClick={() => onChatClick(chat)}
            >
              <img
                src={
                  chat.participants[0]._id === loggedInUserId
                    ? chat.participants[1].profilePic
                    : chat.participants[0].profilePic
                }
                alt="Profile Picture"
                className="profile-pic"
              />
              <div className="chat-details">
                <h3 className="contact-name">
                  {chat.participants[0]._id === loggedInUserId
                    ? chat.participants[1].firstName +
                      " " +
                      chat.participants[1].lastName
                    : chat.participants[0].firstName +
                      " " +
                      chat.participants[0].lastName}
                </h3>
                <p className="last-message">
                  {chat.messages[chat.messages.length - 1]?.content}
                </p>
              </div>
              <div className="message-info">
                <span className="message-count">
                  {parseInt(chat.messages.length)}
                </span>
                <span className="message-time">
                  {new Date(
                    chat.messages[chat.messages.length - 1]?.time
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatList;
