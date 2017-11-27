import courses = require('./Course');
import Handler = require('./HandlerBase');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


const dataBaseLoc = './../json/Courses.json';

class CourseHandler extends Handler.HandlerBase{

    constructor() { super(); }

    getById(degreeId: number) {

    }
    getByName(name: string) {

    }
    addCourse(course: courses.Course) {

    }
    writeToDatabase(course: courses.Course) {

    }
}