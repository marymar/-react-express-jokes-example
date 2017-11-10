'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Jokes = new Schema({
  id: {
    type: Number,
    required: 'Id is needed'
  },
  joke: {
    type: String,
    required: 'Missed the Joke'
  }
});

module.exports = mongoose.model('Jokes', Jokes);
