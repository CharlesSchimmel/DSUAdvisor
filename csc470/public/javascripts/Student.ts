﻿import Id = require('./Id');

class Student {
    private _userId: number;
    private _firstName: string;
    private _lastName: string;
    private _major: number;

    private _progLength: number;
    private _userName: string;
    private _password: string;

    constructor(firstName: string, lastName: string, userName: string, password: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
        this._password = password;
        this._userId = Id.genUniqueId();
    }
}