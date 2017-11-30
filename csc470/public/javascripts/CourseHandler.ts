import courses = require('./Course');
import Handler = require('./HandlerBase');

class CourseHandler extends Handler.HandlerBase{

    private _dataBaseLoc = './../json/Courses.json';

    constructor() {
        super();
        this._db.defaults({ course: {} }).write();
    }

    getById(degreeId: number) {

    }
    getByName(name: string) {

    }
    add(course: courses.Course) {
        //db.set('user.name', 'typicode').write()
    }
    writeToDatabase(course: courses.Course) {

    }
}