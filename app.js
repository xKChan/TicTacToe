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
    squares.classList.add("squares");
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
  let currentPlayer;
  let turns = 9;

  const playGame = () => {
    playerMove = document.querySelectorAll(".squares");
    playerMove.forEach((square) => {
      square.addEventListener("click", () => {
        whosTurn();
        makeMove(square);
        checkWinner();

        // console.log(e.target.getAttribute("data-spot"));
      });
    });
  };

  const whosTurn = () => {
    if (turns % 2 === 1) {
      console.log("p1");
      turns--;
      console.log(turns);
      currentPlayer = playerOne.marker;
    } else {
      console.log("p2");
      turns--;
      console.log(turns);
      currentPlayer = playerTwo.marker;
    }
  };

  const makeMove = (square) => {
    square.classList.add("placed");
    return (square.textContent = currentPlayer);
  };

  const checkWinner = () => {
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
