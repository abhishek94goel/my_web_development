var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("<h1>Welcome to the Home Page</h1>");
});

app.get("/fallInLoveWith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs", {theThingVar: thing});
});

app.get("/mypet/:petName", function(req,res){   // if condition use in the EJS file 
    var pet = req.params.petName;
    res.render("pet.ejs",{petName:pet});
});

app.get("/posts", function(req,res){
    var postList = [{title : "Post1", author : "Susy"},
                    {title : "Bunny", author : "Colt"},
                    {title : "Heigh", author : "Goel"}];
    res.render("posts.ejs",{posts : postList});
})

app.listen(3000, function(){
    console.log("Server started on Port number 3000");
});

//Used nodemon package of node, for automatic restarting of server on changes in the file