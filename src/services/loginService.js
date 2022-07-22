const { Cliente } = require('../database/models');
const { generateJWTToken } = require('../utils/jwt');

const loginAuth = async (email, password) => {
  const user = await Cliente.findOne({ where: { email } });
  if (!user || password !== user.dataValues.password) {
    const error = { status: 400, message: 'Campos inválidos' };
    throw error;
  }
  const token = generateJWTToken(user.dataValues);
  return token;
};

module.exports = {
  loginAuth,
};