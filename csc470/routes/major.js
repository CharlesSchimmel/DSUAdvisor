"use strict";
exports.__esModule = true;
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/major', function (req, res) {
    res.render('major');
});
exports["default"] = router;
