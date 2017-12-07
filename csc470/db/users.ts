    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    export var userSchema = new Schema({
        userId: { type: Number, required: true, unique: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        major: Number,
        progLength: Number,
        userName: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        classesInProgress: [],
        classesWaitlisted: [],
        classesSignedUpfor: [],
    });

    export var User = mongoose.model('User', userSchema);

module.exports = User;
