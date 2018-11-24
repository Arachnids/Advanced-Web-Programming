const Controller = require('./controller.js');

function initialize(objOptions) {
  const app = objOptions.express;

  app.get('/api/race', (req, res) => {
    Controller.getAll().then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.get('/api/race/:uuid', (req, res) => {
    Controller.getById(req.params.uuid).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.post('/api/race', (req, res) => {
    Controller.create(req.body).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.put('/api/race/:uuid', (req, res) => {
    Controller.updateById(
      req.params.uuid,
      req.body.dName,
      req.body.dPhoto,
      req.body.dNationality,
      req.body.dNumber,
      req.body.dPoints,
    ).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.delete('/api/race', (req, res) => {
    Controller.delete(req.body).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });
}

module.exports.initialize = initialize;
