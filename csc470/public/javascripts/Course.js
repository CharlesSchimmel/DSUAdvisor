"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var courses;
(function (courses) {
    var Course = (function () {
        function Course() {
        }
        return Course;
    }());
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
//# sourceMappingURL=Course.js.map