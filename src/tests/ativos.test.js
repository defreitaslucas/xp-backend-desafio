const frisby = require('frisby');
const Sequelize = require('sequelize');
const shell = require('shelljs');
const sequelizeConfig = require('../database/config/config');
require('dotenv').config();

const { sequelizeCli, apiURL: url } = require('./assets/constants');

describe('Testando o componente de /ativos/:id', () => {
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
  it('Será validado que é possível listar todos os ativos de um usuário específico e todas as ações disponiveis', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lucas@teste.com',
          password: 'lucas12345',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/ativos/101`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result[0].codAtivo).toBe(1);
        expect(result[0].descPapel).toBe('AZUL4');
        expect(result[0].qtdeAtivo).toBe(192);
        expect(result[0].valor).toBe("100.00");
        expect(result[0].Wallet[0].codCliente).toBe(101);
        expect(result[0].Wallet[0].codAtivo).toBe(1);
        expect(result[0].Wallet[0].qtdeAtivo).toBe(5);
        expect(result[0].Wallet[0].valor).toBe("500.00");
        expect(result[1].codAtivo).toBe(2);
        expect(result[1].descPapel).toBe('PETR4');
        expect(result[1].qtdeAtivo).toBe(195);
        expect(result[1].valor).toBe("50.00");
        expect(result[1].Wallet[0].codCliente).toBe(101);
        expect(result[1].Wallet[0].codAtivo).toBe(2);
        expect(result[1].Wallet[0].qtdeAtivo).toBe(1);
        expect(result[1].Wallet[0].valor).toBe("50.00");
        expect(result[2].codAtivo).toBe(3);
        expect(result[2].descPapel).toBe('VALE4');
        expect(result[2].qtdeAtivo).toBe(197);
        expect(result[2].valor).toBe("70.00");
        expect(result[2].Wallet[0]).toBe();
        expect(result[3].codAtivo).toBe(4);
        expect(result[3].descPapel).toBe('XPTO');
        expect(result[3].qtdeAtivo).toBe(200);
        expect(result[3].valor).toBe("80.00");
        expect(result[3].Wallet[0]).toBe();
      });
  });
});
describe('Testando o componente de /ativos/cliente/:id', () => {
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
  it('Será validado que é possível listar todos os ativos de um determinado cliente', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lucas@teste.com',
          password: 'lucas12345',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/ativos/cliente/101`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result[0].codCliente).toBe(101);
        expect(result[0].codAtivo).toBe(1);
        expect(result[0].qtdeAtivo).toBe(5);
        expect(result[0].Acoes.valor).toBe("100.00");
        expect(result[1].codCliente).toBe(101);
        expect(result[1].codAtivo).toBe(2);
        expect(result[1].qtdeAtivo).toBe(1);
        expect(result[1].Acoes.valor).toBe("50.00");
      });
  });
  it('Será validado que NÃO É possível listar todos os ativos de um determinado cliente caso o número do cliente não exista', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lucas@teste.com',
          password: 'lucas12345',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/ativos/cliente/999`)
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Número da conta não encontrado');
      });
  });
});
describe('Testando o componente de /ativos/assets/:id', () => {
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
  it('Será validado que é possível listar um ativos específico', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lucas@teste.com',
          password: 'lucas12345',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/ativos/assets/1`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.codAtivo).toBe(1);
        expect(result.descPapel).toBe('AZUL4');
        expect(result.qtdeAtivo).toBe(192);
        expect(result.valor).toBe("100.00");
      });
  });
  it('Será validado que NÃO É possível listar um ativo caso ele não exista', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lucas@teste.com',
          password: 'lucas12345',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/ativos/assets/999`)
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Número do ativo não encontrado');
      });
  });
});