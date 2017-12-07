"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/classes_left', function (req, res) {
    res.render('classes_left');
});
exports.default = router;
//# sourceMappingURL=classes_left.js.map