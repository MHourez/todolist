function ToDoItem({ todo, deleteToDo, toggleToDo, editToDo, selectToDo }) {
  return (
    <li
      onClick={selectToDo}
      className={`mb-10 d-flex align-items-center justify-content-center flex-row p-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "(✓)"}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleToDo();
        }}
        className="btn btn-primary mr-15"
      >
        Valider
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          editToDo();
        }}
        className="btn btn-primary mr-15"
      >
        Modifier
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteToDo();
        }}
        className="btn btn-reverse-primary mr-15"
      >
        Supprimer
      </button>
    </li>
  );
}

export default ToDoItem;
