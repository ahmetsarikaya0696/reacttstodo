import { useState } from "react";
import "./App.css";
import Form from "./assets/components/Form";
import TodoList from "./assets/components/TodoList";
import { Todo } from "./assets/components/propTypes";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (task: string, day: number) => {
    setTodos((prevState) => [...prevState, { id: Math.random(), task, day }]);
  };

  const handleDelete = (id: number) => {
    setTodos((prevState) => prevState.filter((x) => x.id !== id));
  };

  return (
    <div className="container">
      <Form onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
