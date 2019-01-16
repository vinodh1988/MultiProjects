var express=require('express');
var route= express.Router();

route.get("/info",function(request,response){
    response.send('this is going to be some information');
});

route.get("/contact",function(request,response){
    response.send('this route is all about contacts');
});

module.exports=route;