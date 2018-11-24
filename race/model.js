const Sequelize = require('../config/db.js');

const Race = Sequelize.sequelize.define('race', {
  uuid: {
    type: Sequelize.Sequelize.UUID,
    defaultValue: Sequelize.Sequelize.UUIDV4,
    primaryKey: true,
  },
  rVenue: {
    type: Sequelize.Sequelize.STRING,
  },
  rDate: {
    type: Sequelize.Sequelize.DATE,
  },
});

module.exports.Race = Race;
