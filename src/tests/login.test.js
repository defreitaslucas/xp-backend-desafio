const frisby = require('frisby');
const shell = require('shelljs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { sequelizeCli, apiURL: url } = require('./assets/constants');

describe('Testando o componente de login', () => {
  beforeEach(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate,
      sequelizeCli.seed
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });
  afterEach(() => {
    shell.exec([
      sequelizeCli.drop
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });
  it('Será validado que é possível fazer login com sucesso', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: 'lucas@teste.com',
          password: 'lucas12345',
        })
      .expect('status', 200)
      .then((response) => {
        const { json: { token } } = response;
        expect(typeof token).toBe('string');
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          expect(decoded).not.toBe(expect.objectContaining(
            { password: expect.any(String) }
          ))
        } catch (error) {
          console.log(error);
          throw Error('Seu `token` não consegue ser verificado a partir do segredo da variável de ambiente `JWT_SECRET`')
        }
      });
  });

  it('Será validado que não é possível fazer login sem todos os campos preenchidos', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: 'lucas@teste.com'
        })
      .expect('status', 401)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('"\password\" is required');
      });
  });

  it('Será validado que não é possível fazer login com um usuário que não existe', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: 'senna@gmail.com',
          password: 'lu123456',
        })
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Campos inválidos');
      });
  });
});
