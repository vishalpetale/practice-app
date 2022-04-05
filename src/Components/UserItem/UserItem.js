import React from "react";
import "./UserItem.css";

function UserItem(props) {
  const handleDeleteUser = (e) => {
    props.onDeleteUser(e.target.id);
  };

  return (
    <li className="user-item">
      {props.name} ({props.age} years old)
      <span
        className="user-item-cross"
        id={props.id}
        onClick={handleDeleteUser}
      >
        &#x2717;
      </span>
    </li>
  );
}
export default UserItem;
