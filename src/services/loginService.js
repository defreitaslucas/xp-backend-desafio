const { Cliente } = require('../database/models');
const { generateJWTToken } = require('../utils/jwt');

const getLogin = async (email, password) => {
  if (!email || !password) {
    const error = { status: 400, message: 'Preencha todos os campos' };
    throw error;
  }
  const user = await Cliente.findOne({ where: { email } });
  if (!user || password !== user.dataValues.password) {
    const error = { status: 400, message: 'Campos inválidos' };
    throw error;
  }
  const token = generateJWTToken(user.dataValues);
  return token;
};

module.exports = {
  getLogin,
};