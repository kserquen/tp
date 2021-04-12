module.exports = (sequelize, DataTypes) => {
  return sequelize.define('repair', {
    concept: DataTypes.STRING(150),
    detail: DataTypes.TEXT,
    price: DataTypes.DOUBLE(10,2),
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
};
