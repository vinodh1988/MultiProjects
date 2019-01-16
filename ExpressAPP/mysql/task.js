var db=require('./connection'); 

var Task={

getAll:function(callback){

return db.query("Select * from employee",callback);

},
searchAll:function(pattern,callback){
  console.log("pattern is"+pattern);
  return db.query("select * from employee where lower(name) regexp lower(?)",[pattern],callback);
  
  },
addEmployee:function(emp,callback){
  return db.query("insert into employee values(?,?,?)",
  [emp.eno,emp.name,emp.desig],callback);
}

}
module.exports=Task;