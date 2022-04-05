import React from "react";
import UserItem from "../UserItem/UserItem";
import "./UserList.css";
import Card from "../UI/Card";

function UserList(props) {
  const userList = props.users.map((user) => {
    return (
      <UserItem
        key={user.id}
        id={user.id}
        name={user.userName}
        age={user.userAge}
        onDeleteUser={props.onDeleteUser}
      />
    );
  });

  const userListContent =
    props.users.length === 0 ? <li>No user found.</li> : userList;

  return (
    <Card className="list">
      <ul className="user-list">{userListContent}</ul>
    </Card>
  );
}
export default UserList;
