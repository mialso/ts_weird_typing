"use strict";
exports.__esModule = true;
exports.render = function (items) {
    console.info('sample render:');
    return exports.renderLevel(items, -1);
};
exports.renderLevel = function (items, level) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var data = items_1[_i];
        if (!Array.isArray(data)) {
            // actual render here
            var tabs = '';
            var tabsNum = level;
            // populate tabs
            while (tabsNum) {
                tabs = tabs + '\t';
                tabsNum--;
            }
            console.info("" + tabs + data);
        }
        else {
            exports.renderLevel(data, level + 1);
        }
    }
};
