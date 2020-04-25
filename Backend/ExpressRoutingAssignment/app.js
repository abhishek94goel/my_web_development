var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment !")  ;
});

app.get("/speak/:animal", function(req,res){

    var sounds = {
                    pig : 'Oink',
                    cow : 'Moo...',
                    dog : 'Woof Woof !'
                };
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
    });

app.get("/repeat/:text/:number", function(req,res){
    var text = req.params.text;
    var str = '';
    for(var i=0; i < req.params.number; i++){
        str = str.concat(' ', text);
    }
    res.send(str);
});

app.get("*", function(req,res){
    res.send("Sorry, page not found....What are you doing with your life !");
});

app.listen(3000, function(){
    console.log("Server started on port number 3000");
});