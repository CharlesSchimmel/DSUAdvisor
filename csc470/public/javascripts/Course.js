"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = (function () {
    function Course() {
    }
    //--------
    Course.prototype.getClassId = function () {
        return this._classId;
    };
    Course.prototype.getName = function () {
        return this._name;
    };
    Course.prototype.setName = function (name) {
        this._name = name;
    };
    Course.prototype.getCourseNumber = function () {
        return this._courseNumber;
    };
    Course.prototype.setCourseNumber = function (courseNumber) {
        this._courseNumber = courseNumber;
    };
    Course.prototype.getCreditHours = function () {
        return this._creditHours;
    };
    Course.prototype.setCreditHours = function (creditHours) {
        if (creditHours > 0 && creditHours < 6) {
            this._creditHours = creditHours;
        }
    };
    Course.prototype.getSubject = function () {
        return this._subject;
    };
    Course.prototype.setSubject = function (subject) {
        this._subject = subject;
    };
    Course.prototype.getDescription = function () {
        return this._description;
    };
    Course.prototype.setDescription = function (description) {
        this._description = description;
    };
    Course.prototype.getPreRequisites = function () {
        return this._preRequisites;
    };
    Course.prototype.setPreRequisites = function (preRequ) {
        this._preRequisites = preRequ;
    };
    Course.prototype.addPreRequisite = function (requ) {
        this._preRequisites[requ.getName()] = requ;
    };
    Course.prototype.removePreRequisite = function (requ) {
        delete this._preRequisites[requ];
    };
    return Course;
}());
exports.Course = Course;
var Subject;
(function (Subject) {
    Subject[Subject["ENG"] = 0] = "ENG";
    Subject[Subject["CSC"] = 1] = "CSC";
    Subject[Subject["EE"] = 2] = "EE";
    Subject[Subject["MATH"] = 3] = "MATH";
    Subject[Subject["PHYS"] = 4] = "PHYS";
    Subject[Subject["SS"] = 5] = "SS";
    Subject[Subject["HUM"] = 6] = "HUM";
    Subject[Subject["CENG"] = 7] = "CENG";
})(Subject = exports.Subject || (exports.Subject = {}));
var Semester;
(function (Semester) {
    Semester[Semester["FALL"] = 0] = "FALL";
    Semester[Semester["SPRING"] = 1] = "SPRING";
    Semester[Semester["SUMMER"] = 2] = "SUMMER";
})(Semester = exports.Semester || (exports.Semester = {}));
//# sourceMappingURL=Course.js.map