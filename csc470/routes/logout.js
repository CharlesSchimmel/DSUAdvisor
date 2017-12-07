"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * logout
 */
var express = require("express");
var router = express.Router();
var logout = function () {
    return function (req, res, next) {
        req.logout();
        delete req.session;
        next();
    };
};
router.get('/', logout, function (req, res) {
    console.log('logged out');
    //res.sendFile(path.resolve('./public/logout.html'));
});
router.get('/logout', logout());
exports.default = router;
//# sourceMappingURL=logout.js.map