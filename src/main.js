// DOM elements
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const buttons = document.querySelectorAll(".controls button");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Choices dictionary
const choices = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

// Add functionalities to the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const player = button.getAttribute("data-choice");
    const computer = getComputerChoice();
    const result = getResult(player, computer);

    // Set the choice
    playerChoice.textContent = choices[player];
    computerChoice.textContent = choices[computer];

    // Animate choice
    animate(playerChoice);
    animate(computerChoice);

    // Update and display result
    updateScores(result);
    displayResult(result);
  });
});

// Get computer choice
function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
}

// Determine result
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

// Display result
function displayResult(result) {
  if (result === "draw") {
    resultText.textContent = "IT'S A DRAW";
    resultText.style.color = "#000";
  } else if (result === "win") {
    resultText.textContent = "YOU WIN 🎉";
    resultText.style.color = "green";
  } else {
    resultText.textContent = "YOU LOSE 💀";
    resultText.style.color = "red";
  }
}

// Update scores
function updateScores(result) {
  if (result === "win") playerScore++;
  if (result === "lose") computerScore++;

  playerScoreText.textContent = `player ${playerScore}`;
  computerScoreText.textContent = `computer ${computerScore}`;
}

// Simple animation
function animate(el) {
  el.classList.add("animate");
  setTimeout(() => el.classList.remove("animate"), 200);
}
