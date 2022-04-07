import React, { useState } from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    const newUser = { ...user, id: Math.random().toString() };

    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <>
      <UserInput onAddUser={handleAddUser} />
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </>
  );
}
export default App;
