'use strict';

var _ = require('lodash');
var Clue = require('./clue.model');

// Get list of clues
exports.index = function(req, res) {
  Clue.find(function (err, clues) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(clues);
  });
};

// Get a single clue
exports.show = function(req, res) {
  Clue.findById(req.params.id, function (err, clue) {
    if(err) { return handleError(res, err); }
    if(!clue) { return res.status(404).send('Not Found'); }
    return res.json(clue);
  });
};

// Creates a new clue in the DB.
exports.create = function(req, res) {
  Clue.create(req.body, function(err, clue) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(clue);
  });
};

// Updates an existing clue in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Clue.findById(req.params.id, function (err, clue) {
    if (err) { return handleError(res, err); }
    if(!clue) { return res.status(404).send('Not Found'); }
    var updated = _.merge(clue, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(clue);
    });
  });
};

// Deletes a clue from the DB.
exports.destroy = function(req, res) {
  Clue.findById(req.params.id, function (err, clue) {
    if(err) { return handleError(res, err); }
    if(!clue) { return res.status(404).send('Not Found'); }
    clue.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}