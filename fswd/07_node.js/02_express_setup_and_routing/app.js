var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var pug = require('pug');

var port = 3000;

var app = express();

app.use(function(req, res, next){
  console.log('Time: ', Date.now());
  next();
});

//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', function(req, res){
  res.render('index', {
    title: 'HI EVERYBODY!!!',
    showTitle: true,
    household: ['Wayne', 'Wil', 'Lucas']
  });
});

app.get('/nugget', function(req, res){
  res.render('nugget');
});

app.get('/booboo', function(req, res){
  res.render('booboo');
});

app.listen(3000);
console.log('Server started on port ' + port);

module.exports = app;
