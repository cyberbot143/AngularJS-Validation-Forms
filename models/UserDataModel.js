
var mongoose  = require('mongoose');
var UserDataSchema = mongoose.Schema({         //creating a post schema
   _id: {type:String},
   Name:{type:String},
   Email:{type:String},
   Age:{type:String},
   regOn:{type:Date,default:Date.now}
});

var UserDataModel = mongoose.model("UserModel",UserDataSchema);
module.exports = UserDataModel;