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
