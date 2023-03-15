import { useState } from "react";

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
      <button
        onClick={cancelEditToDo}
        className="btn btn-reverse-primary mr-15"
      >
        {" "}
        Annuler
      </button>
      <button onClick={handleClick} className="btn btn-primary">
        {" "}
        Sauvegarder
      </button>
    </div>
  );
}

export default EditToDo;
