import React, { useState } from "react";
import "./UserInput.css";
import Modal from "../Modal/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";

function UserInput(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalmsg] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserAgeChange = (e) => {
    setUserAge(e.target.value);
  };

  const clearInputFields = () => {
    setUserName("");
    setUserAge("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setModalmsg("Please enter a valid name and age.(non empty values)");
      setModalOpen(true);
      return;
    }
    if (+userAge < 0) {
      setModalmsg("Please enter a valid age (>0)");
      setModalOpen(true);
      setUserAge("");
      return;
    }

    clearInputFields();

    const user = { userName, userAge };
    props.onAddUser(user);
  };

  return (
    <div>
      <Card className="input">
        <form className="input-form" onSubmit={handleFormSubmit}>
          {/* Username */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleUserNameChange}
          />
          {/* Age */}
          <label htmlFor="userage">Age(in years)</label>
          <input
            type="number"
            id="userage"
            value={userAge}
            onChange={handleUserAgeChange}
          />

          <Button type="submit">Add User</Button>
        </form>
        <Modal
          modalOpen={modalOpen}
          onChangeModal={setModalOpen}
          msg={modalMsg}
        />
      </Card>
    </div>
  );
}
export default UserInput;
