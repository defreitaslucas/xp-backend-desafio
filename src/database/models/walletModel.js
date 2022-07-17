module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    idAtivo: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    idConta: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10,2),
  },
    {
      tableName: 'Wallet',
      timestamps: false,
    });
    Wallet.associate = (models) => {
      Wallet.belongsTo(models.Conta, { foreignKey: 'idConta', as: 'Conta'});
    };
    Wallet.associate = (models) => {
      Wallet.belongsTo(models.Acoes, { foreignKey: 'idAtivo', as: 'Acoes'})
    }
  return Wallet;
};