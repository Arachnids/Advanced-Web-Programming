const Model = require('./model.js');
const ModelD = require('../driver/model.js');

function getAllResult(db) {
  return Model.Result.findAll({
    include: [{
      model: db.sequelize.models.driver,
      as: "Driver"
    },
    {
      model: db.sequelize.models.race,
      as: "Race"
    }]
  });
}

function getResultById(strResultId) {
  return Model.Result.findById(strResultId);
}

function getRace(strRaceId, db) {
  // console.log('asdasd', db);
  return Model.Result.findAll({
    where: { raceUuid: strRaceId },
    include: [{
      model: db.sequelize.models.driver,
      as: "Driver"
    }]
  });
}

function createResult(objResult) {
  return Model.Result.create({
    points: objResult.points,
    driverUuid: objResult.driverUuid,
    raceUuid: objResult.raceUuid,
  });
}

function updateResultById(uuid, points) {
  return Model.Result.update({
    points,
  },
  { where: { uuid } });
}

function deleteResult(strResultId) {
  return Model.Result.destroy({ where: { uuid: strResultId.uuid } });
}

const Export = module.exports;
Export.getAll = getAllResult;
Export.getById = getResultById;
Export.getRace = getRace;
Export.create = createResult;
Export.updateById = updateResultById;
Export.delete = deleteResult;
