import Button from "./Button";

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
      <Button
        onClick={(e) => {
          e.stopPropagation();
          toggleToDo();
        }}
        text="Valider"
        className="mr-15"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          editToDo();
        }}
        text="Modifier"
        className="mr-15"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          deleteToDo();
        }}
        text="Supprimer"
      />
    </li>
  );
}

export default ToDoItem;
