// const Sequelize = require('sequelize');
// const shell = require('shelljs');
// const sequelizeConfig = require('../database/config/config');
// const { sequelizeCli } = require('./assets/constants');
// const queries = require('./assets/queries');

// describe('Testando as migrations', () => {
//   let database;
//   before(() => {
//     database = new Sequelize(sequelizeConfig.test);
//     shell.exec([
//       sequelizeCli.drop,
//       sequelizeCli.create,
//       sequelizeCli.migrate,
//       sequelizeCli.seed
//     ].join(' && '),
//     { silent: process.env.DEBUG === 'false' });
//   });
//   after(() => {
//     sequelizeCli.drop
//   })

//   // beforeAll(() => {
//   //   database = new Sequelize(sequelizeConfig.test);
//   // });

//   // beforeEach(() => {
//   //   shell.exec([
//   //     sequelizeCli.drop,
//   //     sequelizeCli.create,
//   //     sequelizeCli.migrate,
//   //   ].join(' && '),
//   //     { silent: process.env.DEBUG === 'false' });
//   // });
//   it('Será validado que é possível fazer um INSERT e um SELECT na tabela Client', async () => {
//     const insertQuery = await database
//     .query(queries.insert.cliente, { type: 'INSERT' });
//     expect(insertQuery).toEqual([1, 1]);

//     const [selectQuery] = await database
//       .query(queries.select.cliente, { type: 'SELECT' });
//     expect(selectQuery).toEqual(
//       expect.objectContaining(queries.expect.cliente),
//     );
//   });
//   it('Será validado que é possível fazer um INSERT e um SELECT na tabela Conta depois que fizer INSERT na tabela Client', async () => {
//     const insertQuery = await database
//       .query(queries.insert.cliente, { type: 'INSERT' });
//     expect(insertQuery).toEqual([1, 1]);

//     const insertContaQuery = await database
//       .query(queries.insert.conta, { type: 'INSERT' });
//     expect(insertContaQuery).toEqual([1, 1]);

//     const [selectQuery] = await database
//       .query(queries.select.conta, { type: 'SELECT' });
//     expect(selectQuery).toEqual(
//       expect.objectContaining(queries.expect.conta),
//     );
//   });
//   it('Será validado que é possível fazer um INSERT e um SELECT na tabela Acoes', async () => {
//     const insertAcoesQuery = await database
//       .query(queries.insert.acoes, { type: 'INSERT' });
//     expect(insertAcoesQuery).toEqual([1, 1]);

//     const [selectQuery] = await database
//       .query(queries.select.acoes, { type: 'SELECT' });
//     expect(selectQuery).toEqual(
//       expect.objectContaining(queries.expect.acoes),
//     );
//   });
//   it('Será validado que é possível fazer um INSERT e um SELECT na tabela Wallet depois que fizermos o INSERT nas tabelas Conta e Acoes', async () => {
//     const insertContaQuery = await database
//       .query(queries.insert.conta, { type: 'INSERT' });
//     expect(insertContaQuery).toEqual([1, 1]);

//     const insertAcoesQuery = await database
//       .query(queries.insert.acoes, { type: 'INSERT' });
//     expect(insertAcoesQuery).toEqual([1, 1]);

//     const insertWalletQuery = await database
//       .query(queries.insert.wallet, { type: 'INSERT' });
//     expect(insertWalletQuery).toEqual([1, 1]);

//     const [selectQuery] = await database
//       .query(queries.select.wallet, { type: 'SELECT' });
//     expect(selectQuery).toEqual(
//       expect.objectContaining(queries.expect.wallet),
//     );
//   });
// });
