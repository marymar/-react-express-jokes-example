const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Foo = require('./api/models/foo.model'),
  Jokes = require('./api/models/jokes.model'),
  bodyParser = require('body-parser'),
  fooRoutes = require('./api/routes/foo.routes'),
  jokeRoutes = require('./api/routes/joke.routes');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/foo', {
  useMongoClient: true
});

// set CORS header and intercept "OPTIONS" preflight calls from Browsers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//register the routes
fooRoutes(app);
jokeRoutes(app);

// nothing matched?
app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
