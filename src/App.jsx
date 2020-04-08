import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import List from "./components/list";

function App() {
  const [isNewTaskAdded, setIsNewTaskAdded] = useState(false);
  const [isLoaded, seIsLoaded] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        seIsLoaded(true);
        setTodoItems(result.map((element) => element.task));
      });
  }, [isNewTaskAdded]);

  function getTodoItem(value) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: value }),
    };
    fetch("http://localhost:5000/todo", requestOptions).then((response) =>
      response.json()
    );
    setIsNewTaskAdded(!isNewTaskAdded);
  }

  function deleteTodo(element) {
    console.log(element);
    fetch(`http://localhost:5000/todo/${element}`, {method: "DELETE"}).then((response) =>
      response.json()
    );
    setIsNewTaskAdded(!isNewTaskAdded);
  }

  if (!isLoaded) {
    return (
      <div className="App">
        <header className="App-header">
          <Form getTodoItem={getTodoItem} />
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <Form getTodoItem={getTodoItem} />
          <List todoList={todoItems} deleteTodo={deleteTodo} />
        </header>
      </div>
    );
  }
}

export default App;
