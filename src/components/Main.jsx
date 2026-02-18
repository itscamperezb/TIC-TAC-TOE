import Players from "./Players";
import GameBoard from "./GameBoard";
import { useState } from "react";
import Log from "./Log";
import { WINNING_COMBINATIONS } from "./Winning_Combination";
import GameOver from "./GameOver";

const emptyGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  gameTurns.length > 0 && gameTurns[0].player === "X"
    ? (currentPlayer = "O")
    : (currentPlayer = "X");

  return currentPlayer;
}
// setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
export default function Main() {
  //hago este use state acá ya que esta información es necesaria tanto para <Player/> como para <GameBorad/>
  //entonces puedo coger activePlayer y pasarselos como props
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...emptyGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].col];
    const secondSquare = gameBoard[combination[1].row][combination[1].col];
    const thirdSquare = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  }
  let hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prev) => {
      const currentPlayer = deriveActivePlayer(prev);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
    console.log("sirve");
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prev) => {
      return { ...prev, [symbol]: newName };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            name="Player 1"
            symbol="X"
            isactive={activePlayer === "X"}
            nameChange={handleRestart}
          />
          <Players
            name="Player 2"
            symbol="O"
            isactive={activePlayer === "O"}
            nameChange={handleRestart}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} restartGame={handleRestart} />
        )}
        <GameBoard
          onSelectedSquare={handleSelectSquare}
          gameBoard={gameBoard}
        />
      </div>

      <Log turns={gameTurns} winner={winner} />
    </main>
  );
}
