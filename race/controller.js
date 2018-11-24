const Model = require('./model.js');

function getAllRace() {
  return Model.Race.findAll();
}

function getRaceById(strRaceId) {
  return Model.Race.findById(strRaceId);
}

function createRace(objRace) {
  return Model.Race.create({
    rVenue: objRace.rVenue,
    rDate: objRace.rDate,
  });
}

function updateRaceById(uuid, rVenue, rDate) {
  return Model.Race.update({
    rVenue,
    rDate,
  },
  { where: { uuid } });
}

function deleteRace(objRace) {
  return Model.Race.destroy({ where: { uuid: objRace.uuid } });
}

const Export = module.exports;
Export.getAll = getAllRace;
Export.getById = getRaceById;
Export.create = createRace;
Export.updateById = updateRaceById;
Export.delete = deleteRace;
