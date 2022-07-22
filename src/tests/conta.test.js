const frisby = require('frisby');
const shell = require('shelljs');
require('dotenv').config();

const { apiURL: url, sequelizeCli } = require('./assets/constants');

describe('Testando o componente de /conta/deposito', () => {
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
  it('Será validado que é possível fazer um deposito de uma conta específica', async () => {
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
      .post(`${url}/conta/deposito`,
        {
          codCliente: 100,
          valor: 5000
        })
      .expect('status', 201)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Depósito realizado com sucesso.');
      });
  });
  it('Será validado que NÃO É possível fazer um deposito de uma conta inexistente', async () => {
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
      .post(`${url}/conta/deposito`,
        {
          codCliente: 999,
          valor: 5000
        })
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Número da conta não encontrado');
      });
  });
});

describe('Testando o componente de /conta/saque', () => {
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
  it('Será validado que é possível fazer um saque de uma conta específica', async () => {
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
      .post(`${url}/conta/saque`,
        {
          codCliente: 100,
          valor: 100
        })
      .expect('status', 201)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Valor resgatado com sucesso.');
      });
  });
  it('Será validado que NÃO É possível fazer um saque de uma conta inexistente', async () => {
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
      .post(`${url}/conta/saque`,
        {
          codCliente: 999,
          valor: 5000
        })
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Número da conta não encontrado');
      });
  });
  it('Será validado que NÃO É possível fazer um saque de um valor maior que o saldo', async () => {
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
      .post(`${url}/conta/saque`,
        {
          codCliente: 100,
          valor: 7000000
        })
      .expect('status', 422)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('O valor a ser sacado é maior que o saldo em conta');
      });
  });
});

describe('Testando o componente de /conta/:id', () => {
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
  it('Será validado que é possível fazer uma consulta a uma conta específica', async () => {
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
      .get(`${url}/conta/100`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.codCliente).toBe(100);
        expect(result.saldo).toBe("2000.01");
      });
  });
  it('Será validado que NÃO É possível fazer uma consulta a uma conta inexistente', async () => {
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
      .get(`${url}/conta/999`)
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Número da conta não encontrado');
      });
  });
});