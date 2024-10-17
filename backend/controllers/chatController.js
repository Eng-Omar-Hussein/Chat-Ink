const Chat = require("../models/chat");
const Message = require("../models/message");
const mongoose = require("mongoose");

exports.createChat = async (req, res) => {
  const { participants } = req.body;
  if (!participants || participants.length < 2) {
    return res
      .status(400)
      .json({ error: "Participants array length must be equals 2" });
  }
  try {
    const chat = await new Chat({ participants }).save();
    await chat.populate([
      { path: "participants", select: "firstName lastName profilePic" },
      "messages", // Only show firstName and lastName for members
    ]);
    res.status(201).json(chat);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create chat", message: err.message });
  }
};

exports.getChatById = async (req, res) => {
  const { chatId } = req.params;

  try {
    const chat = await Chat.findById(chatId);
    if (!chat) return res.status(404).json({ error: "Chat not found" });
    await chat.populate([
      { path: "participants", select: "firstName lastName profilePic" },
      "messages", // Only show firstName and lastName for members
    ]);
    res.status(200).json(chat);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch chat", message: err.message });
  }
};

exports.getUserChats = async (req, res) => {
  try {
    const { user } = req.body;
    const chats = await Chat.find({
      participants: user,
    }).populate([
      { path: "participants", select: "firstName lastName profilePic" },
      "messages",
    ]);
    res.status(200).json(chats);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch user chats", message: err.message });
  }
};

exports.addMessageToChat = async (req, res) => {
  const { chatId } = req.params;
  const { sender, content, readBy } = req.body;
  try {
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ error: "Chat not found" });
    }
    if (!content || !sender) {
      return res
        .status(400)
        .json({ error: "Sender and content are required." });
    }

    const newMessage = await new Message({
      sender,
      content,
      readBy,
    }).save();
    await newMessage.populate([
      { path: "sender", select: "firstName lastName profilePic" }, // Only show firstName and lastName for members
      { path: "readBy", select: "firstName lastName profilePic" }, // Populate all fields for admin
    ]);

    if (!chat.messages.includes(newMessage._id)) {
      chat.messages.push(newMessage._id);
    }

    const updatedChat = await chat.save();
    await updatedChat.populate([
      { path: "participants", select: "firstName lastName profilePic" },
      "messages",
    ]);

    res.status(200).json(updatedChat);
  } catch (error) {
    res.status(500).json({
      error: "Failed to update chat messages",
      message: error.message,
    });
  }
};
