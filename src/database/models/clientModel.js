module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    idCliente: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    login: DataTypes.STRING(20),
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
  },
    {
      tableName: 'Cliente',
      timestamps: false,
    });

    Cliente.associate = (models) => {
      Cliente.hasMany(models.Conta, { foreignKey: 'idCliente', as: 'Conta' });
    };

  return Cliente;
};