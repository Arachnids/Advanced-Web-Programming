const Sequelize = require('../config/db.js')
//import { Sequelize, sequelize } from '../config/db.js'
const Driver = Sequelize.sequelize.define('driver', {
  uuid: {
    type: Sequelize.Sequelize.UUID,
    defaultValue: Sequelize.Sequelize.UUIDV4,
    primaryKey: true,
  },
  dName: {
    type: Sequelize.Sequelize.STRING
  },
  dPhoto: {
    type: Sequelize.Sequelize.STRING
  },
  dNationality: {
    type: Sequelize.Sequelize.STRING
  },
  dNumber: {
    type: Sequelize.Sequelize.INTEGER
  },
  dPoints: {
    type: Sequelize.Sequelize.INTEGER
  },
});

const Race = Sequelize.sequelize.define('race', {
  uuid: {
    type: Sequelize.Sequelize.UUID,
    defaultValue: Sequelize.Sequelize.UUIDV4,
    primaryKey: true,
  },
  rVenue: {
    type: Sequelize.Sequelize.STRING
  },
  rDate: {
    type: Sequelize.Sequelize.DATE
  }
});

const Result = Sequelize.sequelize.define('result', {
  uuid: {
    type: Sequelize.Sequelize.UUID,
    defaultValue: Sequelize.Sequelize.UUIDV4,
    primaryKey: true,
  },
  points: {
    type: Sequelize.Sequelize.INTEGER
  }
});