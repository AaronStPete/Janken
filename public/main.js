
let choicePlayer1 = null;
let choicePlayer2 = null;
console.log(choicePlayer1)
console.log(choicePlayer2)
let choiceBoxP1 = document.getElementById('decisionBoxPlayer1')
let jsGameWindow = document.getElementById('gameWindow')

// Player 1 makes a choice
// button is clicked and choicePlayer1 is stored
let p1Rock = () => {
  choicePlayer1 = "rock"
  console.log (choicePlayer1);
  player1decided()
}
let p1Paper = () => {
  choicePlayer1 = "paper"
  console.log (choicePlayer1);
  player1decided()
}
let p1Scissors = () => {
  choicePlayer1 = "scissors"
  console.log (choicePlayer1);
  player1decided()
}

// decisionBoxPlayer1 is filled with text
const player1decided = () => {
  console.log("Player 1 has decided")
  console.log(choiceBoxP1)
  if (choicePlayer1) {
    console.log("choicePlayer1 is truthy")
    choiceBoxP1.textContent = ("Player 1 has decided...")    
  }
}
// Player 2 makes a choice

// button is clicked and choicePlayer2 is stored
let p2Rock = () => {
  choicePlayer2 = "rock"
  console.log (choicePlayer2);
  player2decided()
}
let p2Paper = () => {
  choicePlayer2 = "paper"
  console.log (choicePlayer2);
  player2decided()
}
let p2Scissors = () => {
  choicePlayer2 = "scissors"
  console.log (choicePlayer2);
  player2decided()
}

// decisionBoxPlayer2 is filled with text
let choiceBoxP2 = document.getElementById('decisionBoxPlayer2')
const player2decided = () => {
  console.log("Player 2 has decided")
  console.log(choiceBoxP2)
  if (choicePlayer2) {
    console.log("choicePlayer2 is truthy")
    choiceBoxP2.textContent = ("Player 2 has decided...")    
  }
}
// display button to run game logic
let gameWinner = null
console.log(gameWinner)
const runGame = () => {

  // the rules are defined
  if (choicePlayer1 === "rock") {
    if (choicePlayer2 === "scissors") {
        console.log("p1 wins")
        gameWinner = "Player 1 is the Winner!"
      } else if 
      (choicePlayer2 === "paper") {
        console.log("P2 wins")
        gameWinner = "Player 2 is the Winner!"
      } else if 
      (choicePlayer2 === "rock") {
        console.log("tie")
        gameWinner = "It's a Tie!"
      }
    }
  if (choicePlayer1 === "paper") {
    if (choicePlayer2 === "scissors") {
        console.log("p2 wins")
        gameWinner = "Player 2 is the Winner!"
      } else if 
      (choicePlayer2 === "paper") {
        console.log("tie")
        gameWinner = "It's a Tie!"
      } else if 
      (choicePlayer2 === "rock") {
        console.log("Player 1 is the Winner!")
        gameWinner = "Player 1 is the Winner!"
      }
    }
  if (choicePlayer1 === "scissors") {
    if (choicePlayer2 === "scissors") {
        console.log("tie")
        gameWinner = "It's a Tie!"
      } else if 
      (choicePlayer2 === "paper") {
        console.log("P1 wins")
        gameWinner = "Player 1 is the Winner!"
      } else if 
      (choicePlayer2 === "rock") {
        console.log("P2 wins")
        gameWinner = "Player 2 is the Winner!"
      }
    }
// an outcome is displayed
// show whoWon
jsGameWindow.textContent = (gameWinner)
}  
  // offer reset button

// reset button
  // 