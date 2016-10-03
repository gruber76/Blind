/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Clue = require('../api/clue/clue.model');
var Message = require('../api/message/message.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

// Insert seed data below
var clueSeed = require('../api/clue/clue.seed.json');
var messageSeed = require('../api/message/message.seed.json');
var thingSeed = require('../api/thing/thing.seed.json');

// Insert seed inserts below
Clue.find({}).remove(function() {
	Clue.create(clueSeed);
});

Message.find({}).remove(function() {
	Message.create(messageSeed);
});

Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});