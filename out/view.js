"use strict";
exports.__esModule = true;
exports.personAge = function (user) {
    return "Age: " + (user.age + 2);
};
exports.personName = function (user) {
    return "Name: " + (user.name + 2);
};
exports.personView = function (user) {
    return [
        exports.personName(user),
        [
            exports.personAge(user),
        ]
    ];
};
