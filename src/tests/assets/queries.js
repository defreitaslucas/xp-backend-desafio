module.exports = {
  insert: {
    cliente: 'INSERT INTO Cliente (idCliente, name, username, email, password)'
           + 'VALUES (1, "Lucas de Freitas Abreu", "tapa", "lucas@teste.com", "lucas12345")',
    conta: 'INSERT INTO Conta (codCliente, idCliente, saldo) VALUES(100, 1, 2000.01)',
    acoes: 'INSERT INTO Acoes (codAtivo, descPapel, qtdeAtivo, valor)'
         + 'VALUES(1, "AZUL4", 192, 100.00)',
    wallet: 'INSERT INTO Wallet (codCliente, codAtivo, qtdeAtivo, valor)'
          + 'VALUES(100, 1, 3, 300.00)',
  },
  select: {
    cliente: 'SELECT * FROM Cliente WHERE email = "lucas@teste.com"',
    conta: 'SELECT * FROM Conta WHERE codCliente = 100',
    acoes: 'SELECT * FROM Acoes WHERE codAtivo = 1',
    wallet: 'SELECT * FROM Wallet WHERE codCliente = 100 AND codAtivo = 1',
  },
  expect: {
    cliente: {
      idCliente: 1,
      name: 'Lucas de Freitas Abreu',
      username: 'tapa',
      email: 'lucas@teste.com',
      password: 'lucas12345',
    },
    conta: {
      codCliente: 100,
      idCliente: 1,
      saldo: 2000.01,
    },
    acoes: {
      codAtivo: 1,
      descPapel: 'AZUL4',
      qtdeAtivo: 192,
      valor: 100.00,
    },
    wallet: {
      codCliente: 100,
      codAtivo: 1,
      qtdeAtivo: 3,
      valor: 300.00,
    },
  },
};