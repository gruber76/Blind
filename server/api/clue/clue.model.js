'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClueSchema = new Schema({
  name: String,
  info: String,
  lat: Number,
  lng: Number,
  active: Boolean
});

module.exports = mongoose.model('Clue', ClueSchema);