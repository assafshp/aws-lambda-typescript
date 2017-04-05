import { Storage } from 'znk-infra';
import { Callback, Context } from 'aws-lambda';


exports.handler = function(event: any, context: Context, callback: Callback) {
    var _event = event;
    var _context = context

    var _callback = callback;
    console.log(_event + ',' + _context + '_' + _callback);
    let storage = new Storage();
    storage.addItem('item1');
    // return 'done';
    context.succeed('Function completed sucessfully');
};


