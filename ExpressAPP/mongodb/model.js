var mongoose=require('mongoose');

var MyModel=mongoos('employees', 
new mongoose.Schema({ eno: Number, name: String, city: String}), 
'employees');  

module.exports=MyModel;