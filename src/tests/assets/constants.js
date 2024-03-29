module.exports = {
  sequelizeCli: {
    drop: 'npx sequelize-cli db:drop',
    create: 'npx sequelize-cli db:create',
    migrate: 'npx sequelize-cli db:migrate',
    seed: 'npx sequelize-cli db:seed:all',
  },
  apiURL: 'http://localhost:3000',
};