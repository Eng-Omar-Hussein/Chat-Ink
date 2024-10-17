const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessageById,
  updateReadBy,
} = require("../controllers/messageController");

router.post("/", createMessage);
router.get("/:messageId", getMessageById);
router.patch("/read/:messageId", updateReadBy);

module.exports = router;
