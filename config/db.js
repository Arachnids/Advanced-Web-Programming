const Sequelize = require('sequelize');
const sequelize = new Sequelize('formula1', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;