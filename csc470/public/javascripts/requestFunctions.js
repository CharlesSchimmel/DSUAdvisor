"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//setup
var fs = require('fs');
// ===============================
// EXPORTED VARIABLES ============
// ===============================
exports.all_classes = JSON.parse(fs.readFileSync('cs_courses.json', 'utf8'));
// ===============================
// EXPORTED FUNCTIONS ============
// ===============================
/**
 * Calculates the number of credits the user needs to take to finish their degree program
 */
function calcCreditsLeft(user) {
    var count = 0;
    var finishedNames = user.classesFinished.map(getName);
    for (var i = 0; i < exports.all_classes; i++) {
        if (finishedNames.indexOf(exports.all_classes[i]._name) === -1) {
            count += exports.all_classes[i]._creditHours;
        }
    }
    return count;
}
exports.calcCreditsLeft = calcCreditsLeft;
/**
 * Returns
 */
function getName(c) {
    return c._name;
}
exports.getName = getName;
/**
 * Returns a list of the courses a user has not taken, but needs for their degree program
 */
function calcClassesNeeded(user) {
    var classesNeeded = [];
    var notNeededClasses = user.classesFinished.concat(user.classesInProgress).concat(user.classesWaitlisted).concat(user.classesSignedUpfor);
    var names = notNeededClasses.map(getName);
    console.log(names);
    for (var i = 0; i < exports.all_classes.length; i++) {
        if (names.indexOf(exports.all_classes[i]._name) === -1) {
            classesNeeded.push(exports.all_classes[i]);
        }
    }
    console.log(classesNeeded);
    return classesNeeded;
}
exports.calcClassesNeeded = calcClassesNeeded;
/**
 * Removes course from users list of taken courses
 */
function untakeClass(user, aClass) {
    var index = user.classesFinished.indexOf(aClass);
    if (index !== -1) {
        user.classesFinished.splice(index, 1);
    }
    index = user.classesInProgress.indexOf(aClass);
    if (index !== -1) {
        user.classesInProgress.splice(index, 1);
    }
    index = user.classesWaitlisted.indexOf(aClass);
    if (index !== -1) {
        user.classesWaitlisted.splice(index, 1);
    }
    index = user.classesSignedUpfor.indexOf(aClass);
    if (index !== -1) {
        user.classesSignedUpfor.splice(index, 1);
    }
    user.save(function (err) {
        if (err)
            console.log('Accout update failed');
        return;
    });
}
exports.untakeClass = untakeClass;
//# sourceMappingURL=requestFunctions.js.map