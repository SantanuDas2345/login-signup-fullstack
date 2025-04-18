const express = require('express');
const router = express.Router();
const {signupValidation, loginValidation} = require('../Middlewares/AuthValidation');
const { signup, login } = require('../Controllers/AuthController');
// const { signup, login } = require('../Controllers/AuthController');

// router.post('/login', (req,res)=> {
//     res.send('login successful');
// })

router.post('/login', loginValidation, login)
router.post('/signup', signupValidation, signup)
module.exports = router;