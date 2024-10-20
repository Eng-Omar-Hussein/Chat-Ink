const express = require("express");
const {
  updateUserInfo,
  addFriend,
  removeFriend,
  userInfo,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", userInfo);
router.put("/accountSettings", updateUserInfo);
router.patch("/addFriend", addFriend);
router.patch("/removeFriend", removeFriend);

module.exports = router;