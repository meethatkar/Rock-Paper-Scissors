let userScore = 0;
let computerScore = 0;
var choices = document.querySelectorAll(".choices");
var resultDiv = document.querySelector("#result>p");
var userSelectionDiv = document.querySelector("#userSelection");
var computerSelectionDiv = document.querySelector("#computerSelection");
var userScoreDiv = document.querySelector("#yourScore");
var computerScoreDiv = document.querySelector("#computerScore");

choices.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        playGame(elem.getAttribute("id"));
    })
})

function playGame(UserChoice){
    let compRes = computerChoice();
    userSelectionDiv.innerText = UserChoice;
    computerSelectionDiv.innerText = compRes;
    if(compRes === UserChoice){
        resultDiv.innerText = "You Won !!!";
        userScore++;
        userScoreDiv.innerText = userScore;
    }
    else{
        resultDiv.innerText = "Computer Won !!!";
        computerScore++;
        computerScoreDiv.innerText = computerScore;
    }
}

function computerChoice(){
    const choice = ['rock','paper','scissor'];
    return choice[Math.floor(Math.random()*3)];
}