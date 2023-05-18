import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string, onRemoveItem:()=>void }> = (props) => {

  return <li onClick={props.onRemoveItem} className={styles.item}>{props.text}</li>;
};

export default TodoItem;
