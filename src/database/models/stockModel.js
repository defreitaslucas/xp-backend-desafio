module.exports = (sequelize, DataTypes) => {
  const Acoes = sequelize.define('Acoes', {
    idAcao: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    descPapel: DataTypes.STRING(6),
    quantidade: DataTypes.INTEGER,
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