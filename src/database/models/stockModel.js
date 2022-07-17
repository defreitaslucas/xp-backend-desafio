module.exports = (sequelize, DataTypes) => {
  const Acoes = sequelize.define('Acoes', {
    codAtivo: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    descPapel: DataTypes.STRING(6),
    qtdeAtivo: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10,2),
  },
    {
      tableName: 'Acoes',
      timestamps: false,
    });
  Acoes.associate = (models) => {
    Acoes.hasMany(models.Wallet, { foreignKey: 'idAtivo', as: 'Acoes'});
  };
  return Acoes;
};