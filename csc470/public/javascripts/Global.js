"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MINYEAR = 2000;
exports.MAXYEAR = 2040;
function genUniqueId() {
    //could cause repeates if called more than once in same millisecound
    var x = new Date().getTime();
    return x;
}
exports.genUniqueId = genUniqueId;
//# sourceMappingURL=Global.js.map