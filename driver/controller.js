const Model = require('./model.js');

function getAllDriver() {
  return Model.Driver.findAll();
}

function getDriverByID(objDriver) {
  return Model.Driver.findById(objDriver);
}

function createDriver(objDriver) {
  return Model.Driver.create({
    dName: objDriver.dName,
    dPhoto: objDriver.dPhoto,
    dNationality: objDriver.dNationality,
    dNumber: objDriver.dNumber,
    dPoints: objDriver.dPoints,
    dTeam: objDriver.dTeam,
    dFlag: objDriver.dFlag,
  });
}

function updateDriver(uuid, dName, dPhoto, dNationality, dNumber, dPoints, dTeam, dFlag) {
  return Model.Driver.update({
    dName,
    dPhoto,
    dNationality,
    dNumber,
    dPoints,
    dTeam,
    dFlag,
  },
  { where: { uuid } });
}

function deleteDriver(objDriver) {
  return Model.Driver.destroy({ where: { uuid: objDriver.uuid } })
}

const Export = module.exports;
Export.getAll = getAllDriver;
Export.getByID = getDriverByID;
Export.create = createDriver;
Export.updateById = updateDriver;
Export.delete = deleteDriver;
