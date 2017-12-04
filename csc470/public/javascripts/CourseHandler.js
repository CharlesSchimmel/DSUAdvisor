"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = require("./HandlerBase");
var CourseHandler = (function (_super) {
    __extends(CourseHandler, _super);
    function CourseHandler() {
        var _this = _super.call(this) || this;
        _this._dataBaseLoc = './../json/Courses.json';
        return _this;
    }
    CourseHandler.prototype.getById = function (degreeId) {
    };
    CourseHandler.prototype.getByName = function (name) {
    };
    CourseHandler.prototype.add = function (course) {
    };
    CourseHandler.prototype.writeToDatabase = function (course) {
    };
    return CourseHandler;
}(Handler.HandlerBase));
//# sourceMappingURL=CourseHandler.js.map