var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('passportapp', ['users']);
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// Login page - GET
router.get('/login', function(req, res){
  res.render('login');
});
// Register page - GET
router.get('/register', function(req, res){
  res.render('register');
});
// Register post - POST
router.post('/register', function(req, res){
  // Get Form Values
  var name     		= req.body.name;
  var email    		= req.body.email;
  var username 		= req.body.username;
  var password 		= req.body.password;
  var password2 		= req.body.password2;

  // Validation
  req.checkBody('name', 'Name field is required').notEmpty();
  req.checkBody('email', 'Email field is required').notEmpty();
  req.checkBody('email', 'Please use a valid email address').isEmail();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  // Check for errors
  var errors = req.validationErrors();
  if(errors) {
    console.log('Form has errors');
    res.render('register', {
      errors: errors,
      name: name,
      email: email,
      username: username,
      password: password,
      password2: password2
    });
  } else {
      console.log('Success!');
  }
});
module.exports = router;
