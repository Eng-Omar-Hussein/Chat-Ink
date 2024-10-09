// NotificationModel.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    type: { 
    type: String, 
    required: [true , "Type is required"] }, // 'friend_request', 'message'
  
    content: { 
    type: String, 
    required: [true , "Content is required"] },

  link: { 
    type: String }, // URL or ID to take the user to the relevant page
  
    createdAt: { 
    type: Date, 
    default: Date.now },

  readAt: { 
    type: Date },

  read: { 
    type: Boolean, 
    default: false },
});

module.exports = mongoose.model('Notification', notificationSchema);
