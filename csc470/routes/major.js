"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/major', function (req, res) {
    res.render('major');
});
exports.default = router;
//# sourceMappingURL=major.js.map