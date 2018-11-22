const Sequelize = require('../config/db.js')

const Driver = sequelize.define('driver', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  dName: {
    type: Sequelize.STRING
  },
  dPhoto: {
    type: Sequelize.STRING
  },
  dNationality: {
    type: Sequelize.STRING
  },
  dNumber: {
    type: Sequelize.INTEGER
  },
  dPoints: {
    type: Sequelize.INTEGER
  },
});

const Race = sequelize.define('race', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  rVenue: {
    type: Sequelize.STRING
  },
  rDate: {
    type: Sequelize.DATE
  }
});

const Result = sequelize.define('result', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  points: {
    type: Sequelize.INTEGER
  }
});