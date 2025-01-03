import { FC } from "react";
import { Todo } from "./propTypes";

type TodoItemProps = {
  todo: Todo;
  handleDelete: (id: number) => void;
};

const TodoItem: FC<TodoItemProps> = ({ todo, handleDelete }) => {
  return (
    <div className="todo-item" key={todo.id}>
      <div>
        <p>{todo.task}</p>
        <p>{todo.day}</p>
      </div>
      <div>
        <button className="deleteBtn" onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
