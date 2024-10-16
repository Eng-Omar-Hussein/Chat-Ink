const Message = require('../models/message');

exports.createMessage = async (req, res) => {
    const { sender, content, readBy } = req.body;

    if (!sender || !content) {
        return res.status(400).json({ error: 'Sender and content are required.' });
    }

    try {
        const newMessage = new Message({ sender, content, readBy });
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create message', message: error.message });
    }
};

exports.getMessageById = async (req, res) => {
    const { messageId } = req.params;

    try {
        const message = await Message.findById(messageId);
        if (!message) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch message', message: error.message });
    }
};

exports.updateReadBy = async (req, res) => {
    const { messageId } = req.params;
    const { userId } = req.body;
  
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required to update readBy.' });
    }
  
    try {
      const message = await Message.findById(messageId);
      
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
  
      if (!message.readBy.includes(userId)) {
        message.readBy.push(userId); 
      }
  
      const updatedMessage = await message.save();
      res.status(200).json(updatedMessage);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update readBy', message: error.message });
    }
  };