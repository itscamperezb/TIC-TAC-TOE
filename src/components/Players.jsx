import { useState } from "react";

export default function Players(props) {
  const [playerName, setPlayerName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prev) => !prev);
    // puedo perfectamente colocar setIsEditing(!isEditing); pero por cuestiones de buenas practicas es mejor meter una function
    //ya que behind the scenes si colocamos !isEditing, React está predispuesto a cambiar el valor automaticamente mas no cuando yo hago el click
    //esto solo es una buena práctica, pero igualmente setIsEditing(!isEditing) sirve
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
    if (isEditing) {
      props.nameChange(props.symbol, playerName);
    }
  }

  let editablePlayerName;
  isEditing
    ? (editablePlayerName = (
        <input
          type="text"
          required
          value={playerName}
          onChange={handleChangeName}
        ></input>
      ))
    : (editablePlayerName = <span className="player-name">{playerName}</span>);

  //ESTA SERIA LA FORMA SENCILLA Y LARGA DE HACERLO
  //   let playerName = <span className="player-name">{props.name}</span>;
  //   if (isEditing) {
  //     playerName = <input type="text" value={props.name} required></input>;
  //   }

  return (
    <li className={props.isactive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{props.symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
