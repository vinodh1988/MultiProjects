var express=require('express');
var path=require('path');
var app=express();
var routes=require('./routes.js');
var templates=require('./templates.js');
var dataservice=require('./dataservice.js');
var mongoose = require('mongoose');
var rest=require('./mongodb/model.js')
mongoose.connect('mongodb://localhost/capgemini');


rest.find({},function(err,data){
    console.log(data);
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo db connection is open");
});

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.listen('3000',function(){
    console.log("Server started and listening on port 3000");
})

app.get('/',function(request,response){
     response.send("Vinodh is learning NODE JS!!!!");
});



app.set('views', path.join(__dirname, 'public/views/templates')); 
app.set('view engine', 'ejs');

app.use('/more',routes);
app.use('/template',templates);
app.use('/dataservice',dataservice);
app.use(express.static(path.join(__dirname, 'public/scripts')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'public/styles')));
app.use(express.static(path.join(__dirname, 'public/views')));

app.get('/home',function(request,response){
   response.sendFile(path.join(__dirname,"/public/views/index.html"));
}); 

