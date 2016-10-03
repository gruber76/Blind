/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Clue = require('./clue.model');

exports.register = function(socket) {
  Clue.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Clue.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('clue:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('clue:remove', doc);
}