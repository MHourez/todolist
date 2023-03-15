import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  function addToDo(content) {
    const todo = { id: crypto.randomUUID(), content, done: false, edit: false };
    setTodoList([...todoList, todo]);
  }

  function deleteToDo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  function toggleToDo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  function toggleEditToDo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  }
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <div className=" card container p-20">
        <h1 className="mb-20">ToDoList</h1>
        <AddToDo addToDo={addToDo} />
        <ToDoList
          todoList={todoList}
          deleteToDo={deleteToDo}
          toggleToDo={toggleToDo}
          toggleEditToDo={toggleEditToDo}
        />
      </div>
    </div>
  );
}

export default App;
