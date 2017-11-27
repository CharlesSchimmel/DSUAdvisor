import courses = require('./Course');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


const dataBaseLoc = './../json/Courses.json';

export abstract class HandlerBase {
    protected _adapter;
    protected _db = low;

    constructor() {
        this._adapter = new FileSync('db.json');
        this._db = low(this._adapter);
    }
    abstract getById(Id: number);
    abstract getByName(name: string);
    abstract add();
    abstract writeToDatabase();
}