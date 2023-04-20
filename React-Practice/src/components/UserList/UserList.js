import React from "react";
import Card from "../UI/Card";
import UserEntry from "./UserEntry";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.list}>
      {props.userData.map((user) => {
        return (
          <UserEntry key={user.id} username={user.username} age={user.age} />
        );
      })}
    </Card>
  );
};

export default UserList;
