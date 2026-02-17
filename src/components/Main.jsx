import Players from "./Players";
import GameBoard from "./GameBoard";
export default function Main() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players name="Player 1" symbol="X" />
          <Players name="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}
