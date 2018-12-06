const Controller = require('./controller.js');

function initialize(objOptions) {
  const app = objOptions.express;

  app.get('/api/driver', (req, res) => {
    Controller.getAll().then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.get('/api/driver/:uuid', (req, res) => {
    Controller.getByID(req.params.uuid).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.post('/api/driver', (req, res) => {
    Controller.create(req.body).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.put('/api/driver/:uuid', (req, res) => {
    Controller.updateById(
      req.params.uuid,
      req.body.dName,
      req.body.dPhoto,
      req.body.dNationality,
      req.body.dNumber,
      req.body.dPoints,
      req.body.dTeam,
      req.body.dFlag,
    ).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.delete('/api/driver', (req, res) => {
    Controller.delete(req.body).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });
}

module.exports.initialize = initialize;
