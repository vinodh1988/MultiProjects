'use strict';

var event = require('events');
var myevent = new event.EventEmitter();

myevent.on('signal', function (data) {
  console.log("Data::" + data);
});

myevent.emit('signal', "Capegemini");