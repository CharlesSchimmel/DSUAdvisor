class Student {
    private _userId: number;
    private _firstName: string;
    private _lastName: string;
    private _major;

    private _progLength: number;
    private _userName: string;
    private _password: string;

    constructor(firstName: string, lastName: string, userName: string, password: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
        this._password = password;
        this._userId = this.genUniqueId();
    }

    genUniqueId() {
        //could cause repeates if called more than once in same millisecound
        var x = new Date().getTime();
        return x;
    }
}