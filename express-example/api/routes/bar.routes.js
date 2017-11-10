'use strict';
module.exports = function (app) {
  var foo = require('../controllers/foo.controller');

  app.route('/bar')
    .get(foo.listAll)
    .post(foo.create);
};
