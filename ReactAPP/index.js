
var express = require('express');
var app = express();
var path    = require("path");

var server = app.listen(8188, function () {
 console.log("Example app listening at 8088");
})

app.use(express.static(path.join(__dirname, 'src/client/public')));

app.get('/home',function(req,res){
    res.sendFile( path.join(__dirname+'/src/client/public/index.html'));
});