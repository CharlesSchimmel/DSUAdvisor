"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var dataBaseLoc = './../json/Courses.json';
var HandlerBase = (function () {
    function HandlerBase() {
        this._db = low;
        this._adapter = new FileSync('db.json');
        this._db = low(this._adapter);
    }
    return HandlerBase;
}());
exports.HandlerBase = HandlerBase;
//# sourceMappingURL=HandlerBase.js.map