const express = require('express');
const router = express.Router();
const { createChat, getChatById, getUserChats ,addMessageToChat } = require('../controllers/chatController');


router.post('/', createChat);
router.get('/:chatId', getChatById);
router.get('/user/:userId', getUserChats);
router.patch('/:chatId/message', addMessageToChat);

module.exports = router;
