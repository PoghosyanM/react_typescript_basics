import React, { useState, useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = props => {
  //   const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

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