export type FormProps = {
  onAdd: (task: string, day: number) => void;
};

export type Todo = {
  id:number;
  task: string;
  day: number;
};
