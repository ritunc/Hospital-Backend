const express = require('express');
const { handleUserLogin, handleSignUpform, handleUserlogOut } = require('../Controllers/authcontroller');
const router = express.Router();


router.post('/signup', handleSignUpform);
router.post('/login', handleUserLogin);
router.post('/logOut', handleUserlogOut);



module.exports = router;