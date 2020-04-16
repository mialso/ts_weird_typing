"use strict";
exports.__esModule = true;
exports.personAge = function (user) {
    return "Age: " + (user.age + 2);
};
exports.personName = function (name) {
    return "Name: " + (name + 2);
};
exports.personView = function (user) {
    return [
        exports.personName(user.name),
        [
            exports.personAge(user),
        ]
    ];
};
