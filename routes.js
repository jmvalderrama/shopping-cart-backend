const helloWorld = require('./api/helloworld');

module.exports = (app) => {

  app.use('/api/helloworld', helloWorld);

  // Next routes
  // Endpoints in plural
  // app.use('/api/users', user);
  // app.use('/api/products', product);
};
