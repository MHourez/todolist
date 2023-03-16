import ToDoItem from "./ToDoItem";
import EditToDo from "./EditToDo";

function ToDoList({
  todoList,
  deleteToDo,
  toggleToDo,
  toggleEditToDo,
  editToDo,
  selectToDo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditToDo
            key={todo.id}
            todo={todo}
            editToDo={(content) => editToDo(todo.id, content)}
            cancelEditToDo={() => toggleEditToDo(todo.id)}
          />
        ) : (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteToDo={() => deleteToDo(todo.id)}
            toggleToDo={() => toggleToDo(todo.id)}
            editToDo={() => toggleEditToDo(todo.id)}
            selectToDo={() => selectToDo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default ToDoList;
