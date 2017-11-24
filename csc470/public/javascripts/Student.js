var Student = (function () {
    function Student(firstName, lastName, userName, password) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
        this._password = password;
        this._userId = this.genUniqueId();
    }
    Student.prototype.genUniqueId = function () {
        //could cause repeates if called more than once in same millisecound
        var x = new Date().getTime();
        return x;
    };
    return Student;
}());
//# sourceMappingURL=Student.js.map