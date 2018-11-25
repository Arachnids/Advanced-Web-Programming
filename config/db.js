const Sequelize = require('sequelize');

const database = process.env.DATABASE_URL || 'formula1';
let sequelize = '';

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(database);
} else {
  sequelize = new Sequelize('formula1', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

}

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;