
import { Storage } from 'znk-infra';
var ApiBuilder = require("claudia-api-builder");
var api = new ApiBuilder();

api.get('/rate', async function (request) {
    request.pathParams.id;
    let log = 'log: ';
    let storage = new Storage();
    await storage.addItem('item1');
    log += '1 - ' + new Date().getTime();
	await storage.addItem('item2');
     log += '2 - ' + new Date().getTime();
	await storage.addItem('item3');
     log += '3 - ' + new Date().getTime();
    let res =  await storage.getItem(1);
     log += '4 - ' + new Date().getTime();
      log += '5 - ' + res;
    return "welcome to rate api, log=" + log;
});

api.get('/rate/{id}', function (request) {
    var rateId = request.pathParams.id;
    return "get rate by ID " +rateId ;
});

api.post('/rate', function (request) {
	'use strict';

    var rateName = request.body.name;
	return 'posted new rate, ' + rateName;
	// return dynamo result directly
});






module.exports = api;