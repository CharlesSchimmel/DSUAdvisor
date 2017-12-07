import Global = require('./Global');

export class Student {
    private _userId: number;
    private _firstName: string;
    private _lastName: string;
    private _major: string;
    private _progLength: number;
    private _userName: string;
    private _password: string;
    private _classesTaken;
    private _classesInProgress;
    private _classesWaitlisted;
    private _classesSignedUpfor;

    constructor(firstName: string, lastName: string, userName: string, password: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
        this._password = password;
        this._userId = Global.genUniqueId();
    }

    public createSchema() {
        var Schema = mongoose.Schema;
        var userSchema = new Schema({
            userId: Number,
            firstName: String,
            lastName: String,
            major: Number,
            progLength: Number,
            userName: {type: String, required: true, unique: true},
            password: { type: String, required: true},
            classesInProgress: [],
            classesWaitlisted: [],
            classesSignedUpfor: [],
        })
    }
}

