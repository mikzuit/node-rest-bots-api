// import required dependencies
require('dotenv').config();

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config')
    Robot = require('./api/models/robotsModel');

// setting orm mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.db[app.settings.env], {
    useNewUrlParser: true, // Required for mongo latest version
    useUnifiedTopology: true // Required for mongo latest version
});

// setting extra config dependencies . should use parsers, helmet, cors, and other too
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// home route
app.get("/", (req,res, next) => {
    res.json(["Hey", "there", "tester"]);
});

// require routes
var routes = require('./api/routes/robotsRoutes');
routes(app);

// 404 for 'other routes'
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

// listen
app.listen(port)
console.log("Robot api started on " + port);

// in order to run tests
module.exports = app;