/**
 * First selected all elements with queryslector
 * second setup all variables and winning condition
 * third worte checkWinner function which takes cares of all the winning cases
 * fourth added eventlistner on boxex
 * fifth added logic on newgame button and reset button
 */

let boxes = document.querySelectorAll(".Box");
let winner = document.querySelector("#winner");
let newGameBtn = document.querySelector("#newGame");
let resetBtn = document.querySelector("#Reset");
//add all the selectors and continue the game

let currentPlayerX = true;
let board = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// const winningCondition = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

function checkWinner() {
  let winnerDeclared = false;
  for (let index = 0; index < winningCondition.length; index++) {
    let element1 = board[winningCondition[index][0]];
    let element2 = board[winningCondition[index][1]];
    let element3 = board[winningCondition[index][2]];
    // console.log(index);
    // console.log(element1);
    // console.log(winningCondition[index][0]);

    // if (element1 === "" || element2 === "" || element3 === "") {
    //   return;
    // }
    if (element1 !== "" && element1 === element2 && element1 === element3) {
      // console.log(`winner is ${element1} `);
      let playerWon = element1;
      winner.classList.remove("hidden");
      winner.textContent = `Winner is ${playerWon}`;
      // console.log(winner.lastChild);
      newGameBtn.classList.remove("hidden");
      isGameActive = false;
      winnerDeclared = true;
      break;
    }
  }
  if (winnerDeclared === false && !board.includes("")) {
    winner.classList.remove("hidden");
    winner.textContent = `TiE`;
  }
}

boxes.forEach((Element, index) => {
  Element.addEventListener("click", () => {
    if (!isGameActive) return;
    if (Element.textContent === "") {
      // if (Element.textContent !== "") {return}
      if (currentPlayerX) {
        board[index] = "X";
        Element.textContent = "X";
        // console.log(board);
        currentPlayerX = false;
      } else {
        board[index] = "O";
        Element.textContent = "O";
        currentPlayerX = true;
      }
      checkWinner();

      // console.log(winner.textContent);
    }
    resetBtn.classList.remove("hidden");
    // console.log(board);
  });
});

//Reset Button logic
resetBtn.addEventListener("click", () => {
  boxes.forEach((Element) => {
    isGameActive = true;
    Element.textContent = "";
    winner.classList.add("hidden");
    // winner.textContent = "";
    newGameBtn.classList.add("hidden");
    board = ["", "", "", "", "", "", "", "", ""];
  });
});

//New Game Button logic
newGameBtn.addEventListener("click", () => {
  boxes.forEach((Element) => {
    isGameActive = true;
    Element.textContent = "";
    winner.classList.add("hidden");
    // winner.textContent = "";
    board = ["", "", "", "", "", "", "", "", ""];
    // console.log(winner.textContent);
    newGameBtn.classList.add("hidden");
  });
});
