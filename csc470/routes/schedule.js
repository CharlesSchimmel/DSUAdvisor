"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET schedule page
 */
var express = require("express");
var router = express.Router();
console.log("HII");
router.get('/schedule', function (req, res) {
    res.render('schedule');
});
exports.default = router;
//# sourceMappingURL=schedule.js.map