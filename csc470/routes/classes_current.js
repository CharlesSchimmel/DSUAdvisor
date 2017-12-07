"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/classes_current', function (req, res) {
    res.render('classes_current');
});
exports.default = router;
//# sourceMappingURL=classes_current.js.map