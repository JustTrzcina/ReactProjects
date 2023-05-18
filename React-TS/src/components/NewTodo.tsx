import { useRef } from "react";
import styles from "./NewTodo.module.css";
import { useContext } from "react";
import { TodosContex } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContex);

  const submitHandler = (event: React.FormEvent) => {


    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
