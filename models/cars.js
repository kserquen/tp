module.exports = (sequelize, DataTypes) => {
  return sequelize.define('car', {
    model: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    plate: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
};
