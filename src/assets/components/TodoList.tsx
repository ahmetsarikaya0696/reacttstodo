import { FC } from "react";
import { Todo } from "./propTypes";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onDelete }) => {
  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={() => handleDelete(todo.id)}
        />
      ))}
    </div>
  );
};
export default TodoList;
