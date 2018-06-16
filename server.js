var express = require('express');
var logger = require('morgan');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Route setup
app.get(['/','/home'], function(req, res) {
  res.render('home');
});

app.get('/news', function(req, res) {
  res.render('news');
});

app.get('/services', function(req, res) {
  res.render('services');
});

app.get('/team', function(req, res) {
  res.render('team');
});

app.listen(8080);
