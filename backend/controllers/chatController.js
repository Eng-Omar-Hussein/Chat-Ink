const Chat = require('../models/chat');

exports.createChat = async (req, res) => {
  const { participants } = req.body; 
  const chat = new Chat({ participants });
  if (!participants || participants.length !== 2) {
    return res.status(400).json({ error: 'Participants array length must be equals 2' });
  }
  try {
    const savedChat = await chat.save();
    res.status(201).json(savedChat);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create chat', message: err.message });
  }
};


exports.getChatById = async (req, res) => {
  const { chatId } = req.params;

  try {
    const chat = await Chat.findById(chatId);
    if (!chat) return res.status(404).json({ error: 'Chat not found' });
    res.status(200).json(chat);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chat', message: err.message });
  }
};

exports.getUserChats = async (req, res) => {
  const { userId } = req.params;

  try {
    const chats = await Chat.find({ participants: userId });
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user chats', message: err.message });
  }
};

exports.addMessageToChat = async (req, res) => {
    const { chatId } = req.params;
    const { messageId } = req.body; 
  
    if (!messageId) {
      return res.status(400).json({ error: 'Message ID is required to update chat messages.' });
    }
  
    try {
      const chat = await Chat.findById(chatId);
      if (!chat) {
        return res.status(404).json({ error: 'Chat not found' });
      }
  
      if (!chat.messages.includes(messageId)) {
        chat.messages.push(messageId);
      }
  
      const updatedChat = await chat.save(); 
      res.status(200).json(updatedChat);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update chat messages', message: error.message });
    }
  };