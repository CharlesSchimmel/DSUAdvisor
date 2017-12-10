import fs = require('fs');

export function parseCourses(loc: string) {
    var courseList = [];

    var courses = JSON.parse(fs.readFileSync(loc, 'utf8'));

    for (var i = 0; i < courses.size(); i++) {
        courseList.push(courses[i]);
    }

    return courseList;
}

export function searchCourseByNumber(num: number, courseList) {
    for (var i = 0; i < courseList.size(); i++) {
        if (courseList[i]._courseNumber = num)
        {
            return courseList[i];
        }
    }
}