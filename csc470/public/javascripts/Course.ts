import Global = require('./Global');

    export class Course{
        protected _classId: number;
        protected _name: string;
        protected _courseNumber: string;
        protected _creditHours: number;
        protected _subject;
        protected _description: string;
        protected _preRequisites;

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
