var express = require("express");
var app = express();
var cat = require("cat-me");

app.get("/", function(req,res){
    res.send("Hi There !");
});

app.get("/bye", function(req,res){
    res.send("Goodbye !");
});

app.get("/dog", function(req,res){
    var drawing = cat();
    res.send(drawing);
});

app.listen(3000, function(){
    console.log("Server started to listen on port number 3000");
});