const Sequelize = require('../config/db.js')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

Driver.sync({ force: true }).then(() => {
  return Driver.create({
    dName: 'John',
    dPhoto: 'Hancock',
    dNationality: 'German',
    dNumber: 23,
    dPoints: 100
  });
})

Race.sync({ force: true }).then(() => {
  return Race.create({
    rVenue: 'Las Vegas Nevada',
    rDate: 01 / 06 / 2018,
  });
})

Result.sync({ force: true }).then(() => {
  return Result.create({
    points: 100,
  });
})

Driver.belongsTo(Result);
Race.belongsTo(Result);