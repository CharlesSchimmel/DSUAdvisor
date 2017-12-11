"use strict";
//setup
Object.defineProperty(exports, "__esModule", { value: true });
// ===============================
// EXPORTED VARIABLES ============
// ===============================
exports.invalidPasswordMessage = 'Please enter a trojens.dsu.edu email address.';
exports.invalidEmailMessage = 'Please enter a password between 8 - 14 charictors that contains at least one number and a special character.';
// ===============================
// EXPORTED FUNCTIONS ============
// ===============================
function isValidEmail(email) {
    if (email.indexOf("@trojens.dsu.edu") != -1) {
        return true;
    }
    else {
        return false;
    }
}
exports.isValidEmail = isValidEmail;
;
function isValidPassword(password) {
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
}
exports.isValidPassword = isValidPassword;
;
//# sourceMappingURL=loginFunctions.js.map