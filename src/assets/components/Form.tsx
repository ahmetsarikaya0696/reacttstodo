import { FC, useState } from "react";
import { FormProps } from "./propTypes";

const Form: FC<FormProps> = (props: FormProps) => {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAdd(task, day);
    setTask("");
    setDay(0);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseInt(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Task</label>
        <input
          onChange={handleTaskChange}
          value={task}
          type="text"
          placeholder="Enter task..."
        />
      </div>
      <div className="form-group">
        <label>Day</label>
        <input
          onChange={handleDayChange}
          value={day}
          type="number"
          placeholder="How many day will you spend on this?"
        />
      </div>
      <button className="addBtn" type="submit">
        Add
      </button>
    </form>
  );
};
export default Form;
