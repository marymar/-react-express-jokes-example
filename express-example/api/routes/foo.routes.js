'use strict';
module.exports = function (app) {
  var foo = require('../controllers/foo.controller');

  app.route('/foos')
    .get(foo.listAll)
    .post(foo.create);
};
