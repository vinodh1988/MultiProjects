var task=require('./mysql/task');
var express=require('express');
var route= express.Router();



route.get("/employees",(request,response)=>{

      task.getAll(function(err,data){
        response.render('employees',{employees:data});
      });

});

route.get("/search/:pattern",(request,response)=>{
           var pattern=request.params.pattern;
          task.searchAll(pattern,function(err,data){
              
            response.json(data);
          });
    
    });


route.post("/add",(request,response)=>{
    var emp={
        eno:request.body.eno,
        name:request.body.name,
        desig:request.body.desig
    }         
          task.addEmployee(emp,function(err,data){
              console.log(err);
              
             if(err)
                response.render('info',{info:"Not inserted"})
            response.render('info',{info: "Succesfully Inserted"});
          });
    
    });

module.exports=route;