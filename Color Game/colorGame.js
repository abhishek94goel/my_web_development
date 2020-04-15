

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var displayMessage = document.getElementById('displayMessage');
var resetButton = document.getElementById('newColors');
var h1 = document.querySelector("h1");
var easyBtn = document.getElementById("easy");
var hardBtn = document.querySelector("#hard");

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener('click', function(){
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    displayMessage.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener('click', function(){
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    displayMessage.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    for (var i=0 ; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener('click', function(){
    // Genrate new set of colors
    colors = generateRandomColors(numSquares);
    // Pick new target Color
    pickedColor = pickColor();
    // Display new picked color in header
    colorDisplay.textContent = pickedColor;
    //reset the colors of all squares
    for (var i=0 ; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // reset the text content of button to change from PlayAgain to New Colors
    resetButton.textContent = "New Colors";
    // reset the color of H1 background
    h1.style.backgroundColor = "steelblue";
    // resetting the display message
    displayMessage.textContent = "";
})

for(var i=0; i<squares.length; i++){
    //adding colors to the squares
    squares[i].style.backgroundColor = colors[i];

    //adding color event listeners
    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor===pickedColor){
            displayMessage.textContent = "Correct !"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "Try Again !"
        }
    });
}

function changeColors(color){
    for(var i=0 ; i< squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // Generating random numbers for 3 channels of RGB colors
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    
    var rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgbColor;
}