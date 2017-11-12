const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Jokes = new Schema({
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
