const express = require('express');
const { loginAuth } = require('../services/loginService');

const login = express();

login.post('/', async (req, res) => {
  const { email, password } = req.body;
  const token = await loginAuth(email, password);
  return res.status(200).json({ token });
});

module.exports = login;