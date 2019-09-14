/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

const express = require('express');
const http = require('http');

const expressConfig = require('./config/express');
const routeConfig = require('./routes');

const app = express();
const server = http.createServer(app);

expressConfig(app);
routeConfig(app);

const config = {
  port: 8080,
  ip: '127.0.0.1',
};

function startServer() {
  app.shoppingCartBK = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}

setImmediate(startServer);

module.exports = app;
