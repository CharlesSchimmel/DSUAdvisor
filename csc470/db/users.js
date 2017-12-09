"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User;
(function (User) {
    User.userSchema = new Schema({
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
    //export var User = mongoose.model('AdvisorUser', userSchema);
    //if (mongoose.models.Admin) {
    //    var AdvisorUser = mongoose.model('AdvisorUser');
    //} else {
    //    var AdvisorUser = mongoose.model('AdvisorUser', userSchema);
    //}
})(User = exports.User || (exports.User = {}));
//# sourceMappingURL=users.js.map