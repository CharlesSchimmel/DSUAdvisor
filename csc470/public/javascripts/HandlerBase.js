"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var dataBaseLoc = './../json/Courses.json';
var HandlerBase = (function () {
    function HandlerBase() {
        mongoose.connect('mongodb://localhost/test');
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
    }
    return HandlerBase;
}());
exports.HandlerBase = HandlerBase;
//# sourceMappingURL=HandlerBase.js.map