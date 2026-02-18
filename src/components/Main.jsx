import Players from "./Players";
import GameBoard from "./GameBoard";
import { useState } from "react";
import Log from "./Log";

export default function Main() {
  //hago este use state acá ya que esta información es necesaria tanto para <Player/> como para <GameBorad/>
  //entonces puedo coger activePlayer y pasarselos como props
  //   const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prev) => {
      let currentPlayer = "X";

      prev.length > 0 && prev[0].player === "X"
        ? (currentPlayer = "O")
        : (currentPlayer = "X");
      //   if (prev.length > 0 && prev[0].player === "X") {
      //     currentPlayer === "O";
      //   }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="Player 1" symbol="X" isactive={gameTurns === "X"} />
          <Players name="Player 2" symbol="O" isactive={gameTurns === "O"} />
        </ol>
        <GameBoard onSelectedSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}
