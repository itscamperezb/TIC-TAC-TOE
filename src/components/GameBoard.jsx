import { useState } from "react";

const emptyGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [playerSelection, setSelection] = useState(emptyGameBoard);

  function handleClick(rowIndex, colIndex) {
    setSelection((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = "X";
      console.log(updatedBoard);
      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
      {playerSelection.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

//NOTA
// al ingresar emptyGameBoard en .map(), decidí colocar dos inputs ya que estoy mapeando arrays dentrod e un array
// y al colocar dos inputs, .map() interpreta el primero como el value, y el segundo como el index
