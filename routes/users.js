var express = require('express');
var router = express.Router();
var utils = require('../models/usersModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {

    let users = await utils.getUsers();
    res.render('users',{ users : users.data });
});

router.get('/:id', async function(req, res, next) {

    let user = await utils.getUserData(req.params.id);
    res.render('user',{ user });
});

module.exports = router;
