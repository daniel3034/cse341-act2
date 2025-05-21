const routes = require('express').Router();
const temple = require('./temple');
const contacts = require('./contacts');

// routes.use('/', require('./swagger'));
routes.use('/temples', temple);
routes.use('/contacts', contacts);
routes.get('/', (req, res) => {
  res.send({ message: 'Welcome to the API' });
});

module.exports = routes;
