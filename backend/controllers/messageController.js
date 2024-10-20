const Message = require("../models/message");

exports.createMessage = async (req, res) => {
  const { user, content, readBy } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Sender and content are required." });
  }

  try {
    const newMessage = await new Message({
      sender: user,
      content,
      readBy,
    }).save();
    await newMessage.populate([
      { path: "sender", select: "firstName lastName profilePic" }, // Only show firstName and lastName for members
      { path: "readBy", select: "firstName lastName profilePic" }, // Populate all fields for admin
    ]);
    res.status(201).json(newMessage);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create message", message: error.message });
  }
};

exports.getMessageById = async (req, res) => {
  const { messageId } = req.params;

  try {
    const message = await Message.findById(messageId).populate([
      { path: "sender", select: "firstName lastName profilePic" }, // Only show firstName and lastName for members
      { path: "readBy", select: "firstName lastName profilePic" }, // Populate all fields for admin
    ]);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(message);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch message", message: error.message });
  }
};

exports.updateReadBy = async (req, res) => {
  const { messageId } = req.params;
  const { user } = req.body;

  try {
    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    if (!message.readBy.includes(user)) {
      message.readBy.push(user);
    }

    const updatedMessage = await message.save();
    await updatedMessage.populate([
      { path: "sender", select: "firstName lastName profilePic" }, // Only show firstName and lastName for members
      { path: "readBy", select: "firstName lastName profilePic" }, // Populate all fields for admin
    ]);
    res.status(200).json(updatedMessage);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update readBy", message: error.message });
  }
};