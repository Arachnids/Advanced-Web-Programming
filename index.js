const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db.js');
const Driver = require('./driver/index.js');
const Race = require('./race/index.js');
const Result = require('./result/index.js');
const Config = require('./db/config.js');
const ModelRe = require('./result/model.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const objRoutesOptions = {
  express: app,
  db,
};

Driver.routes.initialize(objRoutesOptions);
Race.routes.initialize(objRoutesOptions);
Result.routes.initialize(objRoutesOptions);

setTimeout(() => {
  ModelRe.init();
}, 2000);

app.listen(port, () => console.log(`Listening on port ${port}!`));
