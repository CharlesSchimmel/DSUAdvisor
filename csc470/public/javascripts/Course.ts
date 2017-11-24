import Id = require('./Id');

namespace courses {
    class Course {
        private _classId: number;
        private _name: string;
        private _courseNumber: string;
        private _creditHours: number;
        private _subject;
        private _description: string;

        constructor(name: string, courseNumber: string, subject: string, description: string) {
            this._firstName = firstName;
            this._lastName = lastName;
            this._userName = userName;
            this._password = password;
            this._classId = Id.genUniqueId();
        }
    }

    enum Subject {
        ENG,
        CSC,
        EE,
        MATH,
        PHYS,
        SS,
        HUM,
        CENG,
    }

    enum Semester {
        FALL,
        SPRING,
        SUMMER,
    }
}