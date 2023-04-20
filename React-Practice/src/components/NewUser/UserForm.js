import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [newUsername, setNewUsername] = useState("");
  const [newUserAge, setNewUserAge] = useState("");

  const onChangeUsernameHandler=(event)=>{
    setNewUsername(event.target.value)
  }
  const onChangeAgeHandler=(event)=>{
    setNewUserAge(event.target.value)
  }

  const onSubmitHandle=(event)=>{
    event.preventDefault();
    props.handleNewUser({id:Math.random().toString(), username:newUsername,age:newUserAge})
    setNewUserAge("");
    setNewUsername("");
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandle}>
        <label htmlFor="">Username</label>
        <input onChange={onChangeUsernameHandler} id="username" type="text" value={newUsername} />
        <label>Age(Years)</label>
        <input onChange={onChangeAgeHandler} type="number" min="1" step="1" value={newUserAge} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default UserForm;
