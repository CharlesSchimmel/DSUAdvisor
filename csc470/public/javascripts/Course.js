"use strict";
<<<<<<< HEAD
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
var courses;
(function (courses) {
    var MINYEAR = 2000;
    var MAXYEAR = 2040;
    var Course = (function () {
        function Course() {
=======
exports.__esModule = true;
var courses;
(function (courses) {
    var Course = /** @class */ (function () {
        function Course(name, courseNumber, creditHours, subject, description) {
            this._classId;
            number;
            this._name;
            string;
            this._courseNumber;
            string;
            this._creditHours;
            number;
            this._subject;
            this._description;
            string;
>>>>>>> 55efec263796091528732842ce3518a1495f93ae
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
            if (year > MINYEAR && year < MAXYEAR) {
                this._year = year;
            }
        };
        return CourseInstance;
    }(Course));
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
    })(Subject || (Subject = {}));
    var Semester;
    (function (Semester) {
        Semester[Semester["FALL"] = 0] = "FALL";
        Semester[Semester["SPRING"] = 1] = "SPRING";
        Semester[Semester["SUMMER"] = 2] = "SUMMER";
    })(Semester || (Semester = {}));
})(courses || (courses = {}));
