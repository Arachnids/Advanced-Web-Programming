const Model = require('./model.js');

function getAllResult() {
  return Model.Result.findAll();
}

function getResultById(strResultId) {
  return Model.Result.findById(strResultId);
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
Export.create = createResult;
Export.updateById = updateResultById;
Export.delete = deleteResult;
