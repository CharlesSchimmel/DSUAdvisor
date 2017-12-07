"use strict";
exports.__esModule = true;
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    if (req.user == null) {
        res.render('menu', { title: 'CSC470 Application' });
    }
    else {
        res.render('index', { title: 'CSC470 Application' });
    }
});
exports["default"] = router;
