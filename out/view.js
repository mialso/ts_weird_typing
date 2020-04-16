"use strict";
exports.__esModule = true;
exports.personAge = function (user) {
    return user.age + 2;
};
exports.personName = function (user) {
    return user.name + 2;
};
exports.personView = function (user) {
    return [
        exports.personName(user),
        [
            exports.personAge(user),
        ]
    ];
};
