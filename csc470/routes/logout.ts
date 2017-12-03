/*
 * logout
 */
import express = require('express');
const router = express.Router();

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
})

router.get('/logout', logout());

export default router;