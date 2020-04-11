button1 = document.querySelector('#p1')
button2 = document.querySelector('#p2')
player1_score = 0;
player2_score = 0;
displayScore1 = document.querySelector('#display_player1')
displayScore2 = document.querySelector('#display_player2')
inputNumber = document.querySelector('#inputNumber')
targetScore = document.querySelector('#targetScore')
resetButton = document.querySelector('#reset')
maxScore = 5;
gameOver = false;

button1.addEventListener('click', function(){
    if (!gameOver){
        player1_score++;
        displayScore1.textContent = player1_score;
        if(player1_score===maxScore){
            gameOver=true;
            displayScore1.classList.add('winningColor')
        }
    }
});
button2.addEventListener('click', function(){
    if (!gameOver){
        player2_score++;
        displayScore2.textContent = player2_score;
        if(player2_score===maxScore){
            gameOver=true;
            displayScore2.classList.add('winningColor')
        }
    }
});

function reset_function(){
    player1_score = 0;
    player2_score = 0;
    displayScore1.textContent = player1_score;
    displayScore2.textContent = player2_score;
    gameOver = false;
    displayScore1.classList.remove('winningColor')
    displayScore2.classList.remove('winningColor')
}

resetButton.addEventListener('click',reset_function);

inputNumber.addEventListener('change',function(){
    targetScore.textContent = inputNumber.value;
    maxScore = Number(inputNumber.value);
    reset_function();
});