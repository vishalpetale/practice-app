import React from "react";
import "./UserItem.css";

function UserItem(props) {
  const handleDeleteUser = (e) => {
    props.onDeleteUser(e.target.id);
  };

  return (
    <li className="user-item">
      <div>
        <span className="user-name">{props.name}</span> ({props.age} years old)
      </div>
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
