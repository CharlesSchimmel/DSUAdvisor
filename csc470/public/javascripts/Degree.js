"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id = require("./Id");
var Degree = (function () {
    function Degree(name, length, description, college, requiredClasses) {
        this._name = name;
        this._length = length;
        this._description = description;
        this._college = college;
        this._requiredClasses = requiredClasses;
        this._degreeId = id.genUniqueId();
    }
    return Degree;
}());
exports.Degree = Degree;
var College;
(function (College) {
    College[College["Engineering"] = 0] = "Engineering";
    College[College["Science"] = 1] = "Science";
    College[College["LiberalArts"] = 2] = "LiberalArts";
})(College = exports.College || (exports.College = {}));
//# sourceMappingURL=Degree.js.map