// notificationControllers.js
const Notification = require('../models/NotificationModel');

// Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { userId, type, content, link } = req.body;
    const notification = new Notification({ userId, type, content, link });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: 'Fails to create notification', message:err.message });
  }
};

// Get notifications for a specific user
exports.getUserNotificationById  = async (req, res) => {

  try {
    const notID = req.params.id;
    const notification = await Notification.findById(notID);

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }
     
    res.status(200).json(notification);

    } catch (err) {
    res.status(500).json({ error: 'Faild to get notification', message:err.message });
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
    res.status(500).json({ error: 'Not Found!', message:err.message });
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
    res.status(500).json({ error: 'Fails to delete notification', message:err.message });
  }
};
