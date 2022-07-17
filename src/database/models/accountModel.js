module.exports = (sequelize, DataTypes) => {
  const Conta = sequelize.define('Conta', {
    idConta: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    idClient: DataTypes.INTEGER,
    saldo: DataTypes.DECIMAL(10,2),
  },
    {
      tableName: 'Conta',
      timestamps: false,
    });
  Conta.associate = (models) => {
    Conta.belongsTo(models.Client, { foreignKey: 'idClient', as: 'Client'});
  };
  Conta.associate = (models) => {
    Conta.hasMany(models.Wallet, { foreignKey: 'idConta', as: 'Wallet'});
  };
  return Conta;
};