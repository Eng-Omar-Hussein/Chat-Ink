const express = require('express');
const { login , signUp, updateUserInfo , sendFriendRequest , acceptFriendRequest , rejectFriendRequest , logout } = require('../controllers/userController');

const router = express.Router()

router.post('/login', login);
router.post('/signUp', signUp);
router.put('/accountSettings',updateUserInfo)
router.post('/sendFriendRequest' ,sendFriendRequest )
router.post('/acceptFriendRequest', acceptFriendRequest)
router.post('/rejectFriendRequest' , rejectFriendRequest)
router.post('/logout', logout)

module.exports = router;