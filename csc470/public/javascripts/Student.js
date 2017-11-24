"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Id = require("./Id");
var Student = (function () {
    function Student(firstName, lastName, userName, password) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
        this._password = password;
        this._userId = Id.genUniqueId();
    }
    return Student;
}());
//# sourceMappingURL=Student.js.map