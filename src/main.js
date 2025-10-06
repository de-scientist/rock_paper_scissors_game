// DOM elements
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const buttons = document.getElementById(".controls button");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Add choices
const choices = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
}

//add functionalities to the buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const player = button.getAttribute("data-choice");
        const computer = getComputerChoice();
        const result = getResult(player, computer);

        //set the choice
        playerChoice.textContent = choices[player];
        computerChoice.textContent = choices[computer];
    })
})