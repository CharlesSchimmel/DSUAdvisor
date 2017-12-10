"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function parseCourses(loc) {
    var courseList = [];
    var courses = JSON.parse(fs.readFileSync(loc, 'utf8'));
    for (var i = 0; i < courses.size(); i++) {
        courseList.push(courses[i]);
    }
    return courseList;
}
exports.parseCourses = parseCourses;
function searchCourseByNumber(num, courseList) {
    for (var i = 0; i < courseList.size(); i++) {
        if (courseList[i]._courseNumber = num) {
            return courseList[i];
        }
    }
}
exports.searchCourseByNumber = searchCourseByNumber;
//# sourceMappingURL=courseParse.js.map