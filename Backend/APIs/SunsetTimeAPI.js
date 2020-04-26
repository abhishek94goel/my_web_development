var request = require("request");

request('api.openweathermap.org/data/2.5/weather?id=2172797', function(error,response,body){
    if(!error && response.statusCode==200){
        console.log("All OK !");
        
        var parsedData = JSON.parse(body)
        console.log(parsedData);
    }
});