const Sequelize = require('../config/db.js');

const Result = Sequelize.sequelize.define('result', {
  uuid: {
    type: Sequelize.Sequelize.UUID,
    defaultValue: Sequelize.Sequelize.UUIDV4,
    primaryKey: true,
  },
  points: {
    type: Sequelize.Sequelize.INTEGER,
  },
});

const init = () => {
  Sequelize.sequelize.models.result.belongsTo(Sequelize.sequelize.models.driver, { as: 'Driver', foreignKey: 'driverUuid' });
  Sequelize.sequelize.models.result.belongsTo(Sequelize.sequelize.models.race, { as: 'Race', foreignKey: 'raceUuid' });
};

module.exports.Result = Result;
module.exports.init = init;
