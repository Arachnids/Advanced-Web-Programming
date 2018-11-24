const Sequelize = require('../config/db.js');

const Driver = Sequelize.sequelize.define('driver', {
  uuid: {
    type: Sequelize.Sequelize.UUID,
    defaultValue: Sequelize.Sequelize.UUIDV4,
    primaryKey: true,
  },
  dName: {
    type: Sequelize.Sequelize.STRING,
  },
  dPhoto: {
    type: Sequelize.Sequelize.STRING,
  },
  dNationality: {
    type: Sequelize.Sequelize.STRING,
  },
  dNumber: {
    type: Sequelize.Sequelize.INTEGER,
  },
  dPoints: {
    type: Sequelize.Sequelize.INTEGER,
  },
});

module.exports.Driver = Driver;
