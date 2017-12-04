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
    Student.prototype.createSchema = function () {
        var Schema = mongoose.Schema;
        var schema = new Schema({
            userId: Number,
            firstName: String,
            lastName: String,
            major: Number,
            progLength: Number,
            userName: String,
            password: String,
        });
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map