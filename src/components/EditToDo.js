import { useState } from "react";
import Button from "./Button";

function EditToDo({ todo, editToDo, cancelEditToDo }) {
  const [value, setValue] = useState(todo.content);
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13 && value.length) {
      editToDo(value);
      setValue("");
    }
  }
  function handleClick() {
    if (value.length) {
      editToDo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-10">
      <input
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        type="text"
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill "
      />
      <Button onClick={cancelEditToDo} className="mr-15" text="Annuler" />
      <Button onClick={handleClick} text="Sauvegarder" />
    </div>
  );
}

export default EditToDo;
