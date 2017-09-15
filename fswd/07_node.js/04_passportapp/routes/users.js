var express = require('express');
var router = express.Router();
// Login page - GET
router.get('/login', function(req, res){
  res.send('LOGIN');
});
// Register page - POST
router.get('/register', function(req, res){
  res.send('REGISTER');
});

module.exports = router;
