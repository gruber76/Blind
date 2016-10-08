'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LocationSchema = new Schema({
  lat: Number,
  lng: Number,
  timeStamp: Date

});

module.exports = mongoose.model('Location', LocationSchema);