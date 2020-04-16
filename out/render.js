"use strict";
exports.__esModule = true;
exports.render = function (header, items) {
    console.info(header);
    exports.renderLevel(items, -1);
    console.info('');
};
exports.renderLevel = function (item, level) {
    if (!Array.isArray(item)) {
        // actual render here
        var tabs = '';
        var tabsNum = level > 0 ? level : 0;
        // populate tabs
        while (tabsNum) {
            tabs = tabs + '\t';
            tabsNum--;
        }
        console.info("" + tabs + item);
    }
    else {
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var data = item_1[_i];
            exports.renderLevel(data, level + 1);
        }
    }
};
