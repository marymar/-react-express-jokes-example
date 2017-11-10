'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FooSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a foo'
  }
});

module.exports = mongoose.model('Foo', FooSchema);
