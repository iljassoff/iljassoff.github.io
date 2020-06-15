
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p','s'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "p") return "Paper";
    if(letter === "r") return "Rock";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;  
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " You win! ";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}
function lose(computerChoice, userChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;  
    userScore_span.innerHTML = userScore; 
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + " You lose! ";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 1000);
}
function draw(userChoice, computerChoice){
    userScore;
    computerScore;
    computerScore_span.innerHTML = computerScore;  
    userScore_span.innerHTML = userScore; 
    result_p.innerHTML = " It's a draw. "; 
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')}, 1000);
}

function game(userChoice){
 computerChoice = getComputerChoice();
 switch (userChoice + computerChoice){
 case "rs":
 case "pr":
 case "sp":

 win(userChoice, computerChoice);
 break;
 case "sr":
 case "rp":
 case "ps":
 lose(computerChoice, userChoice);
 break;
 case "rr":
 case "pp":
 case "ss":
 draw(userChoice, computerChoice);
 break;
 }
}

function main(){
rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click', function(){
    game("p");
})
scissors_div.addEventListener('click', function(){
    game("s");
})
}

main();