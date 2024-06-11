import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import { useState } from "react";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  let [todoItems, setTodoItems] = useState([]);
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  function handleAdd(event, todoName, todoDate) {
    event.preventDefault();
    if (todoName.current.value && todoDate.current.value) {
      let todo = {
        todoName: todoName.current.value,
        todoDate: todoDate.current.value,
      };

      setTodoItems((currVal) => [...currVal, todo]);
      todoName.current.value = "";
      todoDate.current.value = "";
    }
  }

  function handleDelete(todoName, todoDate) {
    let newTodoItems = todoItems.filter(
      (item) => item.todoName !== todoName || item.todoDate !== todoDate
    );
    setTodoItems(newTodoItems);
  }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo
          handleAdd={handleAdd}
          todoName={todoName}
          setTodoName={setTodoName}
          setTodoDate={setTodoDate}
          todoDate={todoDate}
        />
        {todoItems.length === 0 && <h1>You have no pending jobs</h1>}
        <TodoItems
          todoItems={todoItems}
          handleDelete={handleDelete}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
