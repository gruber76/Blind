/**
 * Main application routes
 */

'use strict';

var path = require('path');
var express = require('express');

module.exports = function (app) {




  // Insert routes below
  app.use('/api/locations', require('./api/location'));
  app.use('/api/clues', require('./api/clue'));
  app.use('/api/messages', require('./api/message'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  app.use(express.static('./server//static'));
};
