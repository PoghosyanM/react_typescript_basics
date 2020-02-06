import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeHandler = (id: number) => {
    const shouldRemove = confirm(
      "Are you shute that you went remove the affair?"
    );
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  const addHandler = (title: string): void => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [newTodo, ...prev]);
    console.log("------", title);
  };

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};

export default TodosPage;
