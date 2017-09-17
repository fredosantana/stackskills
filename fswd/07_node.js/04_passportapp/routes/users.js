var express = require('express');
var router = express.Router();
// Login page - GET
router.get('/login', function(req, res){
  res.render('login');
});
// Register page - POST
router.get('/register', function(req, res){
  res.render('register');
});

module.exports = router;
