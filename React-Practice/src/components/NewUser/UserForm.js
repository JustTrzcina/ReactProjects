import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const [newUsername, setNewUsername] = useState("");
  const [newUserAge, setNewUserAge] = useState("");
  const [error,setError] = useState();
  const onChangeUsernameHandler = (event) => {
    setNewUsername(event.target.value);
  };
  const onChangeAgeHandler = (event) => {
    setNewUserAge(event.target.value);
  };

  const dismissErrorHandle= ()=>{
    setError(undefined)
  }

  const onSubmitHandle = (event) => {
    event.preventDefault();
    if (newUserAge.trim().length === 0 || newUsername.trim().length === 0) {
      setError({
        title:"Invalid input",
        message:"Please enter a valid name and age."
      })
      return;
    }
    if (+newUserAge < 1) {
      setError({
        title:"Invalid age",
        message:"Invalid input, age should be over 1"
      })
      return;
    }
    props.handleNewUser({
      id: Math.random().toString(),
      username: newUsername,
      age: newUserAge,
    });
    setNewUserAge("");
    setNewUsername("");
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} dismissError={dismissErrorHandle} />}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandle}>
          <label htmlFor="">Username</label>
          <input
            onChange={onChangeUsernameHandler}
            id="username"
            type="text"
            value={newUsername}
          />
          <label>Age(Years)</label>
          <input
            onChange={onChangeAgeHandler}
            type="number"
            value={newUserAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
