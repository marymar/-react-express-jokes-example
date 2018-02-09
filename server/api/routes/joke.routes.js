'use strict';
module.exports = function (app) {
  var jokes = require('../controllers/jokes.controller');

  app.route('/jokes')
    .get(jokes.jokes);

    app.route('/jokes/random')
    .get(jokes.randomJoke);
};
