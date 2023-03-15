import { useState } from "react";

function AddToDo({ addToDo }) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13 && value.length) {
      addToDo(value);
      setValue("");
    }
  }
  function handleClick() {
    if (value.length) {
      addToDo(value);
      setValue("");
    }
  }
  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        type="text"
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill "
      />
      <button onClick={handleClick} className="btn btn-primary">
        {" "}
        Ajouter
      </button>
    </div>
  );
}

export default AddToDo;
