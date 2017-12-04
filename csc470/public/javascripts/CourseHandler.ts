import courses = require('./Course');
import Handler = require('./HandlerBase');

class CourseHandler extends Handler.HandlerBase{

    private _dataBaseLoc = './../json/Courses.json';

    constructor() {
        super();
        
    }

    getById(degreeId: number) {

    }
    getByName(name: string) {

    }
    add(course: courses.Course) {
    }
    writeToDatabase(course: courses.Course) {

    }
}