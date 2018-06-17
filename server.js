const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');
const fetchNews = require('./public/services/newsApi');

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
  return fetchNews()
    .then(function(news) {
      res.render('news',{ newsArticles: news });
    })
    .catch(function(error){
      console.log("Error in calling news api.", error);
      res.redirect('/home');
    });
});

app.get('/services', function(req, res) {
  res.render('services');
});

app.get('/team', function(req, res) {
  res.render('team');
});

app.get('/query', function(req, res) {
  res.render('query');
});

app.get('/careers', function(req, res) {
  res.render('careers');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.listen(process.env.PORT || 8080);
