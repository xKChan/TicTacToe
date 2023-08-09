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
          checkWinner();
          checkTurns();
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
    gameboard.board[spotClicked] = currentPlayer;
    square.classList.add("placed");
    square.textContent = currentPlayer;
    turns--;
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
      for (let i = 0; i < gameboard.board.length; i++) {
        playerMove[i].classList.add("placed");
      }
      running = false;
      return;
    }
    whosTurn();
  };

  const checkTurns = () => {
    if (turns == 0) {
      console.log("hello");
      console.log(turns);
      gameboard.gameStatus.textContent = `Game Over! It's a Tie`;
      return;
    }
  };

  const newGame = () => {
    gameboard.board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gamewinner = false;
    gameboard.gameStatus.textContent = `${currentPlayer}'s turn`;
    turns = 9;
    for (let i = 0; i < gameboard.board.length; i++) {
      playerMove[i].textContent = "";
      playerMove[i].classList.remove("placed");
    }
  };

  playGame();
  const newGameBtn = document
    .querySelector(".newGame")
    .addEventListener("click", newGame);

  return {
    playGame,
  };
})();
