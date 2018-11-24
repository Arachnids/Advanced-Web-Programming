const Sequelize = require('../config/db.js')
const Model = require('../driver/model.js');

Sequelize.sequelize
  .authenticate()
  .then(() => {
    Sequelize.sequelize.sync();
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

Model.Driver.sync({ force: true }).then(() => {
  return Driver.create({
    dName: 'John',
    dPhoto: 'Hancock',
    dNationality: 'German',
    dNumber: 23,
    dPoints: 100
  });
})

Model.Race.sync({ force: true }).then(() => {
  return Race.create({
    rVenue: 'Las Vegas Nevada',
    rDate: 01 / 06 / 2018,
  });
})

Model.Result.sync({ force: true }).then(() => {
  return Result.create({
    points: 100,
  });
})

Result.belongsTo(Driver, { as: "Driver", foreignKey: 'driverUuid' });
Result.belongsTo(Race);
