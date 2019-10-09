var express = require('express');
var router = express.Router();
var utils = require('../models/loginModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', loginFailed: false });
});

router.post('/loginPostDate', async function(req, res, next) {

  let validate = await utils.loginUser(req.body.username,req.body.password);
  if(validate){
    res.redirect('/users');
  }
  else{
      res.render('index', { title: 'Express', loginFailed: true});
  }
});

module.exports = router;
