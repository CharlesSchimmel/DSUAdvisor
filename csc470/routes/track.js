"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/track', function (req, res) {
    res.render('track');
});
exports.default = router;
//# sourceMappingURL=track.js.map