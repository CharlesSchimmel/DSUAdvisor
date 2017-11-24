"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genUniqueId() {
    //could cause repeates if called more than once in same millisecound
    var x = new Date().getTime();
    return x;
}
exports.genUniqueId = genUniqueId;
//# sourceMappingURL=Id.js.map