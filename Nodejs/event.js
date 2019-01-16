var event=require('events');
var myevent= new event.EventEmitter();

myevent.on('signal',(data)=>{
  console.log("Data::"+data);
});

myevent.emit('signal',"Capegemini");