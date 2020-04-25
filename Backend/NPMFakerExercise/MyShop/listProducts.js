var faker = require("faker");

function decoration(){
    console.log("==================");
    console.log("Welcome to my Shop")
    console.log("==================");
}

function fakeItems(number){
    for(var i=0 ; i<number; i++){
        //console.log(faker.fake("{{commerce.productName}} --- ${{commerce.price}}"));
        console.log(faker.commerce.productName() + " --- $" + faker.commerce.price());
    }
}

decoration();
fakeItems(10);
