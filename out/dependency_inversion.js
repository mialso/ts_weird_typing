"use strict";
exports.__esModule = true;
var render_1 = require("./render");
var user_1 = require("./user");
var view_1 = require("./view");
render_1.render(user_1.users.map(view_1.personView));
