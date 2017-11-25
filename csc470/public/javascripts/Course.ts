import Id = require('./Id');


    const MINYEAR = 2000;
    const MAXYEAR = 2040;

    export class Course {
        private _classId: number;
        private _name: string;
        private _courseNumber: string;
        private _creditHours: number;
        private _subject;
        private _description: string;
        private _preRequisites;

        //--------

        public getClassId() {
            return this._classId;
        }

        public getName() {
            return this._name;
        }
        public setName(name: string) {
            this._name = name;
        }

        public getCourseNumber() {
            return this._courseNumber;
        }
        public setCourseNumber(courseNumber: string) {
            this._courseNumber = courseNumber;
        }

        public getCreditHours() {
            return this._creditHours;
        }
        public setCreditHours(creditHours: number) {
            if (creditHours > 0 && creditHours < 6) {
                this._creditHours = creditHours;
            }
        }

        public getSubject() {
            return this._subject;
        }
        public setSubject(subject: Subject) {
            this._subject = subject;
        }

        public getDescription() {
            return this._description;
        }
        public setDescription(description: string) {
            this._description = description;
        }

        public getPreRequisites() {
            return this._preRequisites;
        }
        public setPreRequisites(preRequ) {
            this._preRequisites = preRequ;
        }
        public addPreRequisite(requ: Course) {
            this._preRequisites[requ.getName()] = requ;
        }
        public removePreRequisite(requ: string) {
            delete this._preRequisites[requ];
        }
    }

    export class CourseInstance extends Course {
        private _professor: string;
        private _semester: Semester;
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
        public setSemester(semester: Semester) {
            this._semester = semester;
        }

        public getYear() {
            return this._year;
        }
        public setYear(year: number) {
            if (year > MINYEAR && year < MAXYEAR) {
                this._year = year;
            }
        }


    }

    export enum Subject {
        ENG,
        CSC,
        EE,
        MATH,
        PHYS,
        SS,
        HUM,
        CENG,
    }

    export enum Semester {
        FALL,
        SPRING,
        SUMMER,
    }
