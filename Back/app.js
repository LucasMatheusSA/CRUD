/*
# App.js
  - classe de inicializacao da aplicacao
*/
 
const express = require('express');
const bodyParser = require ('body-parser');
const routes = require('./routes');
const logger = require('./log/logger');
const config = require('./app-config');

const app = express();

// enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// application/json
app.use(bodyParser.json())

// cadastro de rotas na api
app.use('/api', routes);
app.use(express.static('public'));

const StartServer = (port = config.config_web.port) => {
  const server = app.listen(port, function () {
      logger.info(`Server running on port ${server.address().port}`);
    });
};

module.exports = StartServer;