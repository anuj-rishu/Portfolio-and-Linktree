const express = require('express');
const Emailrouter = express.Router();
const { sendEmails } = require('../controllers/emailController');

Emailrouter.post('/send', sendEmails);

module.exports = Emailrouter;