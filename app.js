// Create PLayer --> Factory Function
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

  function addGamePiece() {
    document.querySelectorAll(".squares").forEach((square) => {
      square.addEventListener("click", () => {
        for (let i = 0; i < gameboard.board.length; i++) {
          console.log("hello");
          square.textContent = playerOne.marker;
          return;
        }
      });
    });
  }

  addGamePiece();
  return {
    addGamePiece,
  };
})();
