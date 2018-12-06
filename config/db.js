const Sequelize = require('sequelize');

const database = process.env.DATABASE_URL || 'formula2';
let sequelize = '';

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(database);
} else {
  sequelize = new Sequelize('formula2', 'postgres', '123', {
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
