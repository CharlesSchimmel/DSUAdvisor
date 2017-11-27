"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Id = require("./Id");
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('./../Students.json');
var db = low(adapter);
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
exports.Student = Student;
//# sourceMappingURL=Student.js.map