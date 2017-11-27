"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var dataBaseLoc = './../json/Courses.json';
var CourseHandler = (function () {
    function CourseHandler() {
        this._db = low;
        this._adapter = new FileSync('db.json');
        this._db = low(this._adapter);
    }
    CourseHandler.prototype.getById = function (degreeId) {
    };
    CourseHandler.prototype.getByName = function (name) {
    };
    CourseHandler.prototype.addCourse = function (course) {
    };
    CourseHandler.prototype.writeToDatabase = function (course) {
    };
    return CourseHandler;
}());
//# sourceMappingURL=CourseHandler.js.map