﻿//setup

// ===============================
// EXPORTED VARIABLES ============
// ===============================

export var invalidPasswordMessage = 'Please enter a trojens.dsu.edu email address.'

export var invalidEmailMessage = 'Please enter a password between 8 - 14 charictors that contains at least one number and a special character.'


// ===============================
// EXPORTED FUNCTIONS ============
// ===============================


/**
 * Checks to see if the user entered an @trojens.dsu.edu email
 */
export function isValidEmail(email) {
    if (email.indexOf("@trojens.dsu.edu") != -1) {
        return true;
    }
    else {
        return false;
    }
};


/**
 * Checks to see if the user entered a valid password
 * Must have 8 - 14 chars, and a special char
 */
export function isValidPassword(password) {
    var fail = 0;

    for (var i = 33; i < 48; i++) {

        if (password.indexOf(String.fromCharCode(i)) == -1) {
            fail++;
        }
    }

    if (fail == 16 || password.size < 8 || password.size > 14) {
        return false;
    }

    else {
        return true;
    }
};