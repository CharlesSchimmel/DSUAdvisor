"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.userSchema = new Schema({
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
exports.User = mongoose.model('User', exports.userSchema);
module.exports = exports.User;
//# sourceMappingURL=User.js.map