const express = require("express");
const {
  updateUserInfo,
  addFriend,
  removeFriend,
  userInfo,
  userInfo2,
  getNonFriends,
} = require("../controllers/userController.js");

const router = express.Router();

router.get("/", userInfo);
router.get("/userInfo", userInfo2);
router.get("/suggestFriends", getNonFriends);
router.put("/accountSettings", updateUserInfo);
router.patch("/addFriend", addFriend);
router.patch("/removeFriend", removeFriend);

module.exports = router;
