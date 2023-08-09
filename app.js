// Create Player --> Factory Function
const Players = (name, marker) => {
  return { name, marker };
};

// Create Gameboard --> Module Function
const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let gameStatus = document.querySelector(".gameStatus");

  // display board
  let displayBoard = document.querySelector(".gameBoard");
  for (let i = 0; i < board.length; i++) {
    let squares = document.createElement("div");
    squares.classList.add("squares");
    squares.setAttribute("data-spot", i);
    squares.textContent = board[i];
    displayBoard.appendChild(squares);
  }

  return {
    board,
    gameStatus,
  };
})();

const gameController = (() => {
  let currentPlayer = "X";
  let turns = 9;
  let running = false;

  const playGame = () => {
    playerMove = document.querySelectorAll(".squares");
    running = true;
    gameboard.gameStatus.textContent = `${currentPlayer}'s turn`;
    if (running) {
      playerMove.forEach((square) => {
        square.addEventListener("click", () => {
          makeMove(square);
          whosTurn();
          if (turns < 5) {
            checkWinner();
          }
          checkTurns();
          console.log(gameboard.board);
        });
      });
    }
  };

  const whosTurn = () => {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    gameboard.gameStatus.textContent = `${currentPlayer}'s turn`;
  };

  const makeMove = (square) => {
    const spotClicked = square.getAttribute("data-spot");
    console.log(spotClicked);
    gameboard.board[spotClicked] = currentPlayer;
    square.classList.add("placed", currentPlayer);
    square.textContent = currentPlayer;
  };

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let gamewinner = false;

    for (let i = 0; i < winConditions.length; i++) {
      const conditions = winConditions[i];
      const cellA = gameboard.board[conditions[0]];
      const cellB = gameboard.board[conditions[1]];
      const cellC = gameboard.board[conditions[2]];

      if (cellA == "" || cellB == "" || cellC == "") {
        continue;
      } else if (cellA == cellB && cellB == cellC) {
        gamewinner = true;
        break;
      }
    }
    if (gamewinner) {
      gameboard.gameStatus.textContent = `${currentPlayer} Wins!`;
    }
  };

  const checkTurns = () => {
    if (turns == 0) {
      setTimeout(function () {
        alert("Game Over, No one wins!");
      }, 100);
    }
  };

  playGame();

  return {
    playGame,
  };
})();
