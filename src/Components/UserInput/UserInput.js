import React, { useState } from "react";
import "./UserInput.css";
import Modal from "../Modal/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";

function UserInput(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [errorModal, setErrorModal] = useState();

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
      setErrorModal({
        title: "Invalid Input",
        message: "Please enter a valid name and age.(non empty values)",
      });
      setUserName("");
      return;
    }
    if (+userAge < 0) {
      setErrorModal({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });

      setUserAge("");
      return;
    }

    clearInputFields();

    const user = { userName, userAge };
    props.onAddUser(user);
  };

  const handleCloseErrorModal = () => {
    setErrorModal(null);
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
        {errorModal && (
          <Modal
            title={errorModal.title}
            message={errorModal.message}
            onCloseModal={handleCloseErrorModal}
          />
        )}
      </Card>
    </div>
  );
}
export default UserInput;
