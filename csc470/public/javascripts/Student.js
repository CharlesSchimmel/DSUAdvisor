"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global = require("./Global");
var Student = (function () {
    function Student(firstName, lastName, userName, password) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
        this._password = password;
        this._userId = Global.genUniqueId();
    }
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map