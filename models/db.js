var mongoose=require('mongoose'); 
  
var UserSchema = new mongoose.Schema({ 
    UserId:Number, 
    FirstName:String, 
    LastName:String, 
    EmailId:String, 
    Password:String, 
}); 
  
module.exports = mongoose.model( 
    'user', UserSchema, 'Users');