"use strict";
exports.__esModule = true;
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    console.log('logged in');
    res.render('login');
});
exports["default"] = router;
