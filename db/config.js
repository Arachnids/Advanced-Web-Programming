const Sequelize = require('../config/db.js');
const ModelD = require('../driver/model.js');
const ModelRa = require('../race/model.js');
const ModelRe = require('../result/model.js');

Sequelize.sequelize
  .authenticate()
  .then(() => {
    // ModelRe.init();
    Sequelize.sequelize.sync();
    // Sequelize.sequelize.sync({ force: true });
    console.log('Connection has been established successfully.');

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



// ModelD.Driver.sync({ force: true }).then(() => {
//   return ModelRa.Race.sync({ force: true }).then(() => {
//     return ModelRe.Result.sync({ force: true }).then(() => {
//       setTimeout(() => {
//         ModelRe.init();
//         // ModelRe.Result.create({
//         //   points: 100,
//         // });
//         // ModelRa.Race.create({
//         //   rVenue: 'Las Vegas Nevada',
//         //   rDate: "01 / 06 / 2018",
//         //   rImage: "dsada",
//         // });
//       }, 2000);
      
//     })
//   })
// }).catch(err => {
//   console.error('Unable to connect to the race database:', err);
// });


  // return Driver.create({
  //   dName: 'John',
  //   dPhoto: 'Hancock',
  //   dNationality: 'German',
  //   dNumber: 23,
  //   dPoints: 100,
  //   dTeam: "Mercedes",
  //   dFlag: "asda"
  // });
