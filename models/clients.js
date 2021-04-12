module.exports = (sequelize, DataTypes) => {
  return sequelize.define('client', {
    names: DataTypes.STRING(120),
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
};
