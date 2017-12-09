"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// load the things we need
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
// define the schema for our user model
var userSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    major: String,
    progLength: Number,
    classesInProgress: [],
    classesWaitlisted: [],
    classesSignedUpfor: [],
});
// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
//# sourceMappingURL=user.js.map