import courses = require('./Course');
var mongoose = require('mongoose');

const dataBaseLoc = './../json/Courses.json';

export abstract class HandlerBase {
    public db;

    constructor() {
        mongoose.connect('mongodb://localhost/test');

        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));

    }
    abstract getById(Id: number);
    abstract getByName(name: string);
    abstract add(object);
    abstract writeToDatabase(object);
}