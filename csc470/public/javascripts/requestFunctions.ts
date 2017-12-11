//setup
var fs = require('fs');

// ===============================
// EXPORTED VARIABLES ============
// ===============================
export var all_classes= JSON.parse(fs.readFileSync('cs_courses.json','utf8'));


// ===============================
// EXPORTED FUNCTIONS ============
// ===============================

/**
 * Calculates the number of credits the user needs to take to finish their degree program
 */
export function calcCreditsLeft(user){
    var count=0;
    var finishedNames = user.classesFinished.map(getName);
    for (var i=0; i<all_classes.length; i++){
        if (finishedNames.indexOf(all_classes[i]._name) === -1){
            count += all_classes[i]._creditHours;
        }
    }
    return count;
}

/**
 * Returns
 */
export function getName(c) {
    return c._name;
}

/**
 * Returns a list of the courses a user has not taken, but needs for their degree program
 */
export function calcClassesNeeded(user){
    var classesNeeded = [];
    var notNeededClasses = user.classesFinished.concat(user.classesInProgress).concat(user.classesWaitlisted).concat(user.classesSignedUpfor);
    var names = notNeededClasses.map(getName);


    for (var i=0; i<all_classes.length; i++){

        if (names.indexOf(all_classes[i]._name) === -1) {

            classesNeeded.push(all_classes[i]);
        }
    }


    return classesNeeded;
}

/**
 * Removes course from users list of taken courses
 */
export function untakeClass(user, aClass){
    var index = user.classesFinished.indexOf(aClass);
    console.log(aClass);
    if (index !== -1) {
        user.classesFinished.splice(index, 1);
    }

    index = user.classesInProgress.indexOf(aClass);
    if (index !== -1) {

        user.classesInProgress.splice(index, 1);
    }

    index = user.classesWaitlisted.indexOf(aClass);
    if (index !== -1) {

        user.classesWaitlisted.splice(index, 1)
    }

    index = user.classesSignedUpfor.indexOf(aClass);
    if (index !== -1) {
        user.classesSignedUpfor.splice(index, 1)
    }


    user.save(function (err) {
        if (err)
            console.log('Accout update failed');
        return
    });

}
