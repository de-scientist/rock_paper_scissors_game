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

        //animate choice
        animate(playerChoice);
        animate(computerChoice);

        //update and display result
        updateScores(result);
        displayResult(result);
    });
});

//add a function to get computer choice
function getComputerChoice() {
    const items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random() * items.length)];
}

//add a function to get results
function getResult(player, computer) {
    if (player === computer) return "draw";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper") 
    ) {
        return "win";
    } else {
        return "lose";
    }
}

//add a function to display results
function displayResult(result) {
    if (result === "draw") {
        resultText.textContent = "ITS A DRAW";
        resultText.style.color = "#000";
    } else if (result === "win") {
        resultText.textContent = "YOU WIN 🎉";
        resultText.style.color = "green"
    } else {
        resultText.textContent = "YOU LOSE 💀";
        resultText.style.color = "red";
    }
}

