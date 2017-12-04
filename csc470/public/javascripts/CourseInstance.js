"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Global = require("./Global");
var Course = require("./Course");
var CourseInstance = (function (_super) {
    __extends(CourseInstance, _super);
    function CourseInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //------------------
    CourseInstance.prototype.getProfessor = function () {
        return this._professor;
    };
    CourseInstance.prototype.setProfessor = function (professor) {
        this._professor = professor;
    };
    CourseInstance.prototype.getSemester = function () {
        return this._semester;
    };
    CourseInstance.prototype.setSemester = function (semester) {
        this._semester = semester;
    };
    CourseInstance.prototype.getYear = function () {
        return this._year;
    };
    CourseInstance.prototype.setYear = function (year) {
        if (year > Global.MINYEAR && year < Global.MAXYEAR) {
            this._year = year;
        }
    };
    return CourseInstance;
}(Course.Course));
exports.CourseInstance = CourseInstance;
//# sourceMappingURL=CourseInstance.js.map