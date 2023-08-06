// Create Player --> Factory Function
const Players = (name, marker) => {
  return { name, marker };
};

// Create Gameboard --> Module Function
const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  // display board
  let displayBoard = document.querySelector(".gameBoard");
  for (let i = 0; i < board.length; i++) {
    let squares = document.createElement("div");
    squares.setAttribute("class", "squares");
    squares.setAttribute("data-spot", i);
    squares.textContent = board[i];
    displayBoard.appendChild(squares);
  }

  return {
    board,
  };
})();

const gameController = (() => {
  const playerOne = Players("Player 1", "X");
  const playerTwo = Players("Player 2", "O");

  const playerFirst = true;
  let turns = 9;

  const makeMove = () => {
    playerMove = document.querySelectorAll(".squares");
    playerMove.forEach((square) => {
      square.addEventListener("click", (e) => {
        square.textContent = whosTurn(playerFirst);
        // console.log(e.target.getAttribute("data-spot"));
      });
    });
  };

  const whosTurn = () => {
    if (turns % 2 === 1) {
      console.log("p1");
      turns--;
      console.log(turns);
      return playerOne.marker;
    } else {
      console.log("p2");
      turns--;
      console.log(turns);
      return playerTwo.marker;
    }
  };

  makeMove();
})();
