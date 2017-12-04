import Global = require('./Global');
import Course = require('./Course');

export class CourseInstance extends Course.Course {
    private _professor: string;
    private _semester: Course.Semester;
    private _year: number;
    private _sectionNumber: string;
    private _times;

    //------------------

    public getProfessor() {
        return this._professor;
    }
    public setProfessor(professor: string) {
        this._professor = professor;
    }

    public getSemester() {
        return this._semester;
    }
    public setSemester(semester: Course.Semester) {
        this._semester = semester;
    }

    public getYear() {
        return this._year;
    }
    public setYear(year: number) {
        if (year > Global.MINYEAR && year < Global.MAXYEAR) {
            this._year = year;
        }
    }


}