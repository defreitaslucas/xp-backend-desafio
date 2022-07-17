module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    codCliente: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    codAtivo: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    qtdeAtivo: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10,2),
  },
    {
      tableName: 'Wallet',
      timestamps: false,
    });
    Wallet.associate = (models) => {
      Wallet.belongsTo(models.Conta, { foreignKey: 'codCliente', as: 'Conta'});
    };
    Wallet.associate = (models) => {
      Wallet.belongsTo(models.Acoes, { foreignKey: 'codAtivo', as: 'Acoes'})
    }
  return Wallet;
};