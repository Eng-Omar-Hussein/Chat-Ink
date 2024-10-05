const express = require('express');
const router = express.Router();
const { createMessage, getMessageById, updateReadBy } = require('../controllers/messageController');


router.post('/', createMessage);
router.get('/:messageId', getMessageById);
router.patch('/:messageId/read', updateReadBy);

module.exports = router;
