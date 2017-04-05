"use strict";
const znk_infra_1 = require("znk-infra");
exports.handler = function (event, context, callback) {
    var _event = event;
    var _context = context;
    var _callback = callback;
    console.log(_event + ',' + _context + '_' + _callback);
    let storage = new znk_infra_1.Storage();
    storage.addItem('item1');
    // return 'done';
    context.succeed('Function completed sucessfully');
};
