var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));    //To convert DOM object to Javascript Object
app.set("view engine", 'ejs');

var friendsList = ["Abhishek", "Vinarm", "Aahad", "DAVS", "Ashish", "Magneto", "Devghost"];

app.get('/', function(req,res){
    res.send("Visit /friends page in the link above");
});

app.post('/addFriend', function(req,res){
    console.log(req.body);
    var temp = req.body.newFriend;
    friendsList.push(temp);
    res.redirect("/friends");
})

app.get('/friends', function(req,res){
    res.render("friends", {friends : friendsList});
});

app.listen(3000, function(){
    console.log("Server Started on Port number 3000");
});