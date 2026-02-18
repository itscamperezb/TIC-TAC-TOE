export default function GameOver(props) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {props.winner && <p>{props.winner} Won this Game!</p>}
      {!props.winner && <p>Hubo empate señores</p>}
      <p>
        <button onClick={props.restartGame}>Rematch</button>
      </p>
    </div>
  );
}
