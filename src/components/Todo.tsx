interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo({ title, description, done }: TodoProp) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default Todo;
