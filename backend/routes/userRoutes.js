const express = require('express');
const { login , signUp, updateUserInfo } = require('../controllers/userController');

const router = express.Router()

router.post('/login', login);
router.post('/signUp', signUp);
router.put('/accountSettings',updateUserInfo)

module.exports = router;