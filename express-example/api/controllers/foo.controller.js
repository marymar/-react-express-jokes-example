'use strict';
var mongoose = require('mongoose'),
  Foo = mongoose.model('Foo');

exports.listAll = (req, res) => {
  Foo.find({}, (err, foo) => {
    if (err)
      res.sendStatus(err);
    res.json(foo);
  });
};

exports.create = (req, res) => {
  var newFoo = new Foo(req.body);
  newFoo.save((err, foo) => {
    if (err)
      res.sendStatus(err);
    res.json(foo);
  });
};
