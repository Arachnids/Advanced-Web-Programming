const Controller = require('./controller.js');

function initialize(objOptions) {
  const app = objOptions.express;

  app.get('/api/result', (req, res) => {
    Controller.getAll().then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.get('/api/result/:uuid', (req, res) => {
    Controller.getByID(req.params.uuid).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.post('/api/result', (req, res) => {
    Controller.create(req.body).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.put('/api/result/:uuid', (req, res) => {
    Controller.updateById(req.params.uuid, req.body.points).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });

  app.delete('/api/result', (req, res) => {
    Controller.delete(req.body).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.status(500).json(objError);
    });
  });
}

module.exports.initialize = initialize;
