var createError = require('http-errors');
var express = require('express');
var cors= require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// All routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var crudQuestions = require('./routes/crudQuestions');
var crudAnswers = require('./routes/crudAnswer');
var crudTests = require('./routes/crudTests');
var crudRules = require('./routes/crudRules');
var app = express();
//add mongo db support 
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://104.196.65.106/hackdb')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/questions', crudQuestions);
app.use('/answers', crudAnswers);
app.use('/tests', crudTests);
app.use('/rules', crudRules);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
