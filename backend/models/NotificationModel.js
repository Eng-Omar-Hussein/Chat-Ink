// NotificationModel.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  type: { 
    type: String, 
    required: [true, "Type is required"] // 'friend_request', 'message'
  },
  
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    // ref: 'User', 
    required: [true, "UserId is required"] 
  },

  sender: { 
    type: mongoose.Schema.Types.ObjectId, 
    // ref: 'User', 
    required: [true, "Sender is required"] 
  },
  
  message: { 
    type: mongoose.Schema.Types.ObjectId, 
    // ref: 'Message', 
    // required: [true, "Message ID is required"] 
  },

  room: { 
    type: mongoose.Schema.Types.ObjectId, 
    // ref: 'Room', // Could be a chat or group room
    // required: [true, "Room ID is required"]
  },

  createdAt: { 
    type: Date, 
    default: Date.now 
  },

  readAt: { 
    type: Date 
  },

  read: { 
    type: Boolean, 
    default: false 
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
