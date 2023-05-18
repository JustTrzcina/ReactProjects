import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObjs = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContex = React.createContext<TodosContextObjs>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const onRemoveItemHandler = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      return updatedTodos;
    });
  };

  const contextValue: TodosContextObjs = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onRemoveItemHandler,
  };

  return (
    <TodosContex.Provider value={contextValue}>
      {props.children}
    </TodosContex.Provider>
  );
};

export default TodosContextProvider
