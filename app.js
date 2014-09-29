var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//require routers
var routes = require('./routes/index');
var users = require('./routes/users');

var actions = require('./routes/api/actions');
var devices = require('./routes/api/devices');
var deviceClasses = require('./routes/api/deviceClasses');
var deviceTypes = require('./routes/api/deviceTypes');
var rooms = require('./routes/api/rooms');
var shServices = require('./routes/api/shServices');
var triggers = require('./routes/api/triggers');

var app = express();
var api = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongodb connect
mongoose.connect('mongodb://localhost:27017/SHServiceDB');

//CORS
api.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  if ('OPTIONS' == req.method) return res.sendStatus(200);
  next();
});

//routers
app.use('/', routes);
app.use('/users', users);

app.use('/api', api);
api.use('/actions', actions);
api.use('/devices', devices);
api.use('/deviceClasses', deviceClasses);
api.use('/deviceTypes', deviceTypes);
api.use('/rooms', rooms);
api.use('/shServices', shServices);
api.use('/triggers', triggers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;