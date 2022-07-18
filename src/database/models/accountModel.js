module.exports = (sequelize, DataTypes) => {
  const Conta = sequelize.define('Conta', {
    codCliente: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    idCliente: DataTypes.INTEGER,
    saldo: DataTypes.DECIMAL(10,2),
  },
    {
      tableName: 'Conta',
      timestamps: false,
    });
  Conta.associate = (models) => {
    Conta.belongsTo(models.Client, { foreignKey: 'idCliente', as: 'Client'});
  };
  Conta.associate = (models) => {
    Conta.hasMany(models.Wallet, { foreignKey: 'codCliente', as: 'Wallet'});
  };
  return Conta;
};