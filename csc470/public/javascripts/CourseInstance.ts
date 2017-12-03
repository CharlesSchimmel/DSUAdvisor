import Id = require('./Id');
import Course = require('./Course');

namespace courseinstances {
    class CourseInstance extends Course{
        private _professor: courses.Professor;
        private _semester: courses.Semester;
        private _time: number;
        private _sectionNumber: string;

        constructor(name: string, courseNumber: string, creditHours: number, subject: Subject, description: string, professor: Professor, semester: Semester, time: number, sectionNumber: string) {
            super(name, courseNumber, creditHours, subject, description);
            this._professor = professor;
            this._semester = semester;
            this._times = times;
            this._sectionNumber = sectionNumber;
            this._classId = Id.genUniqueId();
        }
    }
}
