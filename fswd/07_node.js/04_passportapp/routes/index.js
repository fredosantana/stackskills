var express = require('express');
var router = express.Router();

router.get('/', ensureAuthenthicated, function(req, res){
  res.render('index');
});

function ensureAuthenthicated(req, res, next){
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/users/login');
}
module.exports = router;
