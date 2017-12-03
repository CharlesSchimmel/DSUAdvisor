"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('profile', { title: 'Profile' });
});
exports.default = router;
//# sourceMappingURL=profile.js.map