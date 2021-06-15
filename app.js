/*
userChoice  
*/

var userChoice = '';
let computerChoice; 
let showScorePlayer = 0;
let showScoreComputer = 0;

document.getElementById("rock").addEventListener("click", function(event){
userChoice = event.currentTarget.innerText; 
computerChoice = getComputerChoice();
document.getElementById('user-choice').innerText = userChoice;
document.getElementById('computer-choice').innerHTML = computerChoice;
document.getElementById('result').innerText = result();
})
document.getElementById("paper").addEventListener("click", function(event){
userChoice = event.currentTarget.innerText; 
computerChoice = getComputerChoice();
document.getElementById('user-choice').innerText = userChoice;
document.getElementById('computer-choice').innerHTML = computerChoice;
document.getElementById('result').innerText = result();
})
document.getElementById("scissors").addEventListener("click", function(event){
userChoice = event.currentTarget.innerText; 
computerChoice = getComputerChoice();
document.getElementById('user-choice').innerText = userChoice;
document.getElementById('computer-choice').innerHTML = computerChoice;
document.getElementById('result').innerText = result();
})

/*
computerChoice
*/

function getComputerChoice(){
    const randomNumber= Math.random();
    if (randomNumber <0.34){
      return 'rock';
    } else if (randomNumber <=0.67) {
      return 'paper';
    } else{
      return 'scissors';
    }
    }

/*
gamelogic
*/

function result (){
    let result = '';
    if (computerChoice === userChoice) {
        result = 'Draw'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        showScoreComputer = showScoreComputer +1;
        result = 'You lose'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        showScorePlayer = showScorePlayer +1;
        result = 'You win'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        showScoreComputer = showScoreComputer +1;
        result = 'You lose'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        showScorePlayer = showScorePlayer +1;
        result = 'You win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        showScoreComputer = showScoreComputer +1;
        result = 'You lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        showScorePlayer = showScorePlayer +1;
        result = 'You win'
    }
    document.getElementById('player').innerText = showScorePlayer;
    document.getElementById('computer').innerText = showScoreComputer;
    gameOver();
    return result;
}

function gameOver () {
    if (showScorePlayer === 3) {
        //alert ('Game over. - You win')
        let msgWinner = document.querySelector('#messageWinner');
        msgWinner.classList.toggle('reveal');
        showScorePlayer = 0;
        showScoreComputer = 0;  
    }
     if (showScoreComputer === 3) {
        //alert ('Game over. - Computer wins')
        let msgLooser = document.querySelector('#messageLooser');
        msgLooser.classList.toggle('reveal'); 
        showScoreComputer = 0;
        showScorePlayer = 0; 
    }
}




function reStart(){
    if (showScoreComputer && showScorePlayer === 3) {
        var element = document.getElementById("messageWinner");
        element.classList.add("hide");
    

    }
}





        






















