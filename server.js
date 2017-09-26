var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/UserData"); //connection to mongodb
var UserModel = require('./models/UserDataModel');


app.use(express.static(__dirname + '/public')); //static page content
app.use(bodyParser.urlencoded({
  'extended': false
}));
app.use(bodyParser.json());

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  app.post('/get',function(res,res){
   
    UserModel.find({}, function(err, docs) {
        if (!err){ 
            res.status(200).send({"docs":docs})
        } else {throw err;}
    });
   
});
  app.post('/adduser', function (req, res) {
    var retuser = req.body;
    console.log(retuser);
    var user = new UserModel({
     _id: retuser.Name,
      Name: retuser.Name,
      Email: retuser.Email,
      Age:retuser.Age
    });
    user.save(function (err) {
      if (err) {
        console.log(err);
        res.status(500).send({
          "message": "Error with server"
        })
      }
      if (!user) {
        console.log('user already exists');
        res.status(201).send({
          "message": "User already exists"
        });
      } else {
        res.status(200).send({
          "message": "Succesfully Registered"
        });
        console.log('Successfully inserted');
      }
    });

  

  });

  
app.listen(3000);
console.log('Magic happens on port 3000');