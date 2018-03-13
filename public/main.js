
let choicePlayer1 = null;
let choicePlayer2 = null;
console.log(choicePlayer1)
console.log(choicePlayer2)

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
let choiceBoxP1 = document.getElementById('decisionBoxPlayer1')
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
        gameWinner = "p1"
      } else if 
      (choicePlayer2 === "paper") {
        console.log("P2 wins")
        gameWinner = "p2"
      } else if 
      (choicePlayer2 === "rock") {
        console.log("tie")
        gameWinner = "tie"
      }
    }
  if (choicePlayer1 === "paper") {
    if (choicePlayer2 === "scissors") {
        console.log("p2 wins")
        gameWinner = "p2"
      } else if 
      (choicePlayer2 === "paper") {
        console.log("tie")
        gameWinner = "tie"
      } else if 
      (choicePlayer2 === "rock") {
        console.log("p1 wins")
        gameWinner = "p1"
      }
    }
  if (choicePlayer1 === "scissors") {
    if (choicePlayer2 === "scissors") {
        console.log("tie")
        gameWinner = "tie"
      } else if 
      (choicePlayer2 === "paper") {
        console.log("P1 wins")
        gameWinner = "p1"
      } else if 
      (choicePlayer2 === "rock") {
        console.log("P2 wins")
        gameWinner = "p2"
      }
    }

}  
  // an outcome is displayed
  // show whoWon
  // log winner with choicePlayer1 & choicePlayer2
  // offer reset button

// reset button
  // 