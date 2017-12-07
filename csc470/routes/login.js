"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    console.log('logged in');
    res.render('login');
});
exports.default = router;
//# sourceMappingURL=login.js.map