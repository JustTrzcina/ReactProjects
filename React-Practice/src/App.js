import React, { useState } from "react";
import UserForm from "./components/NewUser/UserForm";
import UserList from "./components/UserList/UserList";
const INITIAL_USERS = [
  { id: "u1", username: "Jan Paweł 2", age: "2137" },
  { id: "u2", username: "Jasper", age: "30" },
  { id: "u3", username: "Piesek", age: "10" },
];

function App() {
  const [userList, setUserList] = useState(INITIAL_USERS);
  const newUserHandle = (props) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { id: props.id, username:props.username, age: props.age },
      ];
    });
  };

  return (
    <div>
      <UserForm handleNewUser={newUserHandle} />
      <UserList userData={userList} />
    </div>
  );
}

export default App;
