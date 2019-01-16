var mysql=require('mysql');
var event=require('events');

var emitter=new event.EventEmitter();

module.exports.emitter=emitter;

var employees;
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "capgemini"
  });

module.exports.getemployees=function{
  con.connect(function(err) {
    if (err) throw err;
    con.query("select * from employee", 
     function (err, result, fields) {
      if (err) throw err;
      callback(result);
    });
  });
}

  
  