const routes = require('express').Router();
const get = require('./../controllers/get');
const get = require('./../controllers/index');

routes.get('/', get);

module.exports = routes; 