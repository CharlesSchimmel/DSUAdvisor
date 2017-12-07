"use strict";
exports.__esModule = true;
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/track', function (req, res) {
    res.render('track');
});
exports["default"] = router;
