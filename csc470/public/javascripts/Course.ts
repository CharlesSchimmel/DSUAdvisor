import Id = require('./Id');

namespace courses {
    class Course {
        private _classId: number;
        private _name: string;
        private _courseNumber: string;
        private _creditHours: number;
        private _subject;
        private _description: string;

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