// notificationControllers.js
const Notification = require('../models/NotificationModel');

// Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { userId, type, sender, message, room } = req.body;
    
    const notification = new Notification({
      userId,
      type,
      sender,
      message,
      room
    });

    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create notification', message: err.message });
  }
};

// Get notification by id
exports.getUserNotificationById = async (req, res) => {
  try {
    const notID = req.params.id;
    const notification = await Notification.findById(notID)
      .populate('userId', 'name')
      .populate('sender', 'name')
      .populate('message', 'content')
      .populate('room', 'name');

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get notification', message: err.message });
  }
};




// Get messages for a specific user by userId (from request body)
exports.getMessagesByUserId = async (req, res) => {
  try {
    const { userId } = req.body; // Get userId from the request body

    // Find all notifications where userId matches and type is 'message'
    const notifications = await Notification.find({ userId: userId, type: 'message' })
      .populate('sender', 'name') 
      .populate('message', 'content') 
      .populate('room', 'name'); 

    if (!notifications || notifications.length === 0) {
      return res.status(404).json({ error: 'No messages found for this user' });
    }

    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get messages', message: err.message });
  }
};



// Mark notification as read
exports.markAsRead = async (req, res) => {
  try {
    const notificationId = req.params.id;
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { read: true, readAt: Date.now() },
      { new: true }
    );
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark as read', message: err.message });
  }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
  try {
    const notificationId = req.params.id;
    const noti = await Notification.findByIdAndDelete(notificationId);

    if (!noti) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.status(200).json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete notification', message: err.message });
  }
};
