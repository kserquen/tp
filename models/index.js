'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.js');
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Cars = require('./cars')(sequelize, Sequelize);
db.Cars = Cars;
const Clients = require('./clients')(sequelize, Sequelize);
Cars.belongsTo(Clients, { foreignKey: { allowNull: false } });
db.Clients = Clients;
const Repairs = require('./repairs')(sequelize, Sequelize);
Repairs.belongsTo(Cars, { foreignKey: { allowNull: false } });
db.Repairs = Repairs;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
