// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationControllers');

// Define notification routes
router.post('/', notificationController.createNotification);
router.get('/:id', notificationController.getUserNotificationById );
router.patch('/:id/read', notificationController.markAsRead);
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;
