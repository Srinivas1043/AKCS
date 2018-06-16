var express = require('express');
var logger = require('morgan');
var app = express();
var path = require('path');
// var Handlebars = require('handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get('/team', function(req, res) {
//   res.sendFile(path.join(__dirname + '/team.html'));
// });
//
// // app.get('/services', function(req, res) {
// //   res.sendFile(path.join(__dirname + '/services.html'));
// // });
//
// app.get('/query', function(req, res) {
//   res.sendFile(path.join(__dirname + '/query.html'));
// });
//
// app.get('/careers', function(req, res) {
//   res.sendFile(path.join(__dirname + '/careers.html'));
// });
//
// app.get('/contactUs', function(req, res) {
//   res.sendFile(path.join(__dirname + '/contactus.html'));
// });

app.listen(8080);
