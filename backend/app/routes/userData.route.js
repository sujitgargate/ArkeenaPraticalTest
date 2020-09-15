var userController = require('../controller/userData.controller');

var dotenv =require('dotenv');
dotenv.config();

var express = require('express');
var router = express.Router();

var expressValidator = require('express-validator');

router.use(expressValidator());

router.post('/createUser', userController.createUser);

module.exports = router;