"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/home', function (req, res) {
    res.render('home');
});
exports.default = router;
//# sourceMappingURL=home.js.map