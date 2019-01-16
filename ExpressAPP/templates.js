var express=require('express');
var route= express.Router();

route.get("/sample",function(request,response){
    response.render('first',{data:"CapGemini",
    caption:"This is info sent by EJS Template"
});
});



module.exports=route;