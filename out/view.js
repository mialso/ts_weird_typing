"use strict";
exports.__esModule = true;
exports.personAge = function (age) {
    return "Age: " + (age + 2);
};
exports.personName = function (name) {
    return "Name: " + (name + 2);
};
exports.personView = function (person) {
    return [
        exports.personName(person.name),
        [
            exports.personAge(person.age),
        ]
    ];
};
