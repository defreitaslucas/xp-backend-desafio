const jwt = require('jsonwebtoken');
require('dotenv').config();

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const generateJWTToken = ({ idCliente, name, username, email }) => jwt
.sign({ idCliente, name, username, email }, TOKEN_SECRET, jwtConfig);

module.exports = {
  generateJWTToken,
};