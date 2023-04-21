import React from "react";
import Card from "../UI/Card";
import UserEntry from "./UserEntry";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      {props.userData.map((user) => (
        <ul>
          <UserEntry key={user.id} username={user.username} age={user.age} />
        </ul>
      ))}
    </Card>
  );
};

export default UserList;
