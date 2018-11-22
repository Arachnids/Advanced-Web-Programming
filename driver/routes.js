module.exports.initialize = initialize;

const Controller = require('./controller.js');

function initialize(objOptions) {
  const app = objOptions.express;

  app.get('/api/driver', (req, res) => {
    Controller.getAll().then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.json(objError, 500);
    });
  });

  app.post('/api/driver', (req, res) => {
    Controller.create(req.body).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.json(objError, 500);
    });
  });

  // app.put('/api/driver', Controller.putController);

  app.delete('/api/driver', (req, res) => {
    Controller.delete(req.body).then((objResolve) => {
      res.json(objResolve);
    }).catch((objError) => {
      res.json(objError, 500);
    });
  });
}
