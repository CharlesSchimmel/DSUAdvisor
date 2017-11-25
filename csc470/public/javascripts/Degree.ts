﻿import id = require('./Id');

export class Degree {
     private _degreeId: number;
     private _name: string;
     private _college: College;
     private _description: string;
     private _length: number;
     private _requiredClasses: Array<number>;

     constructor(name: string, length: number, description: string, college: College, requiredClasses: Array<number>) {
     this._name = name;
     this._length = length;
     this._description = description;
     this._college = college;
     this._requiredClasses = requiredClasses;
     this._degreeId = id.genUniqueId();
     }
}

export enum College {
Engineering,
Science,
LiberalArts
}