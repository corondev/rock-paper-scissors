//Player writes their choice
function playerPlay() {
    const playerPrompt = prompt("Please write 'rock', 'paper' or 'scissors'");
    if (playerPrompt === "rock" || "paper" || "scissors") {
        return playerPrompt;
    } if (playerPrompt !== "rock" || "paper" || "scissors") {
        alert("Please write a valid option");    
    }
}

//if (playerPlay() === undefined || NaN) {
//    
//}

//Computer randomly selects a play
function computerPlay() {
    const cpuArr = ["rock", "paper", "scissors"];
    let cpuPlays = Math.floor(Math.random() * 3);
    return cpuArr[cpuPlays];
}

const playerSelection = playerPlay();
const cpuSelection = computerPlay();

console.log(playerSelection);
console.log(cpuSelection);

//round start
function playRound(playerSelection, cpuSelection) {
//rock
if (playerSelection === "rock" && cpuSelection === "rock") {
    alert("It's a tie!");
} if (playerSelection === "rock" && cpuSelection === "paper") {
    alert("You lose!");
} if (playerSelection === "rock" && cpuSelection === "scissors") {
    alert("You win!");
}

//paper
if (playerSelection === "paper" && cpuSelection === "paper") {
    alert("It's a tie!");
} if (playerSelection === "paper" && cpuSelection === "scissors") {
    alert("You lose!");
} if (playerSelection === "paper" && cpuSelection === "rock") {
    alert("You win!");
}

//scissors
if (playerSelection === "scissors" && cpuSelection === "scissors") {
    alert("It's a tie!");
} if (playerSelection === "scissors" && cpuSelection === "rock") {
    alert("You lose!");
} if (playerSelection === "scissors" && cpuSelection === "paper") {
    alert("You win!");
    }
}
//round end

playRound(playerSelection, cpuSelection);
