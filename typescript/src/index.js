"use strict";
exports.__esModule = true;
exports.operaciones = void 0;
var operaciones = function (num1, num2, str) {
    return new Promise(function (resolve) {
        resolve(str === 'sumar'
            ? num1 + num2
            : str === 'restar'
                ? num1 - num2
                : 'no es válido');
    });
};
exports.operaciones = operaciones;
