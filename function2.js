"use strict";
const tslib_1 = require("tslib");
const znk_infra_1 = require("znk-infra");
var ApiBuilder = require("claudia-api-builder");
var api = new ApiBuilder();
api.get('/rate', function (request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        request.pathParams.id;
        let log = 'log: ';
        let storage = new znk_infra_1.Storage();
        yield storage.addItem('item1');
        log += '1 - ' + new Date().getTime();
        yield storage.addItem('item2');
        log += '2 - ' + new Date().getTime();
        yield storage.addItem('item3');
        log += '3 - ' + new Date().getTime();
        let res = yield storage.getItem(1);
        log += '4 - ' + new Date().getTime();
        log += '5 - ' + res;
        return "welcome to rate api, log=" + log;
    });
});
api.get('/rate/{id}', function (request) {
    var rateId = request.pathParams.id;
    return "get rate by ID " + rateId;
});
api.post('/rate', function (request) {
    'use strict';
    var rateName = request.body.name;
    return 'posted new rate, ' + rateName;
    // return dynamo result directly
});
module.exports = api;
