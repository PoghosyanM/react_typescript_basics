import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

// comments - how to do the same with state and onChange handler

const TodoForm: React.FC<TodoFormProps> = props => {
  //   const [title, setTitle] = useState<string>("");

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      //   setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter affairs name"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter affairs name
      </label>
    </div>
  );
};

export default TodoForm;
