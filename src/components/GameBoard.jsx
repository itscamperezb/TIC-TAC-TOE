import { useState } from "react";

export default function GameBoard(props) {
  //   const [playerSelection, setSelection] = useState(emptyGameBoard);

  //   function handleClick(rowIndex, colIndex) {
  //     setSelection((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = props.isactive;

  //       return updatedBoard;
  //     });
  //     props.onSelectedSquare();
  //     () => handleClick(rowIndex, colIndex);
  //   }
  return (
    <ol id="game-board">
      {props.gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => props.onSelectedSquare(rowIndex, colIndex)}
                  disabled={col !== null}
                >
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
