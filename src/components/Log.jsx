export default function Lop(props) {
  return (
    <ol id="log">
      {props.turns.map((item) => {
        return (
          <li key={`${item.square.row}${item.square.col}`}>
            {item.player} selected {item.square.row},{item.square.col}
          </li>
        );
      })}
    </ol>
  );
}
