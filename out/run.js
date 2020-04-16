"use strict";
exports.__esModule = true;
var render_1 = require("./render");
var user_1 = require("./user");
var customer_1 = require("./customer");
var view_1 = require("./view");
render_1.render('users:', user_1.users.map(view_1.personView));
render_1.render('customers:', customer_1.customers.map(function (_a) {
    var name = _a.name;
    return view_1.personName(name);
}));
