import { useContext } from "react";
import { TodosContex } from "../store/todos-context";
import React from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContex);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodoItem
            onRemoveItem={todosCtx.removeTodo.bind(null, item.id)}
            key={item.id}
            text={item.text}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
