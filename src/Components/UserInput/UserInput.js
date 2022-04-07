import React, { useState, useRef } from "react";
import "./UserInput.css";
import Modal from "../Modal/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Wrapper";

function UserInput(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorModal, setErrorModal] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setErrorModal({
        title: "Invalid Input",
        message: "Please enter a valid name and age.(non empty values)",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setErrorModal({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });

      return;
    }

    const user = { userName: enteredUserName, userAge: enteredUserAge };
    props.onAddUser(user);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const handleCloseErrorModal = () => {
    setErrorModal(null);
  };

  return (
    <Wrapper>
      {errorModal && (
        <Modal
          title={errorModal.title}
          message={errorModal.message}
          onCloseModal={handleCloseErrorModal}
        />
      )}
      <Card className="input">
        <form className="input-form" onSubmit={handleFormSubmit}>
          {/* Username */}
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          {/* Age */}
          <label htmlFor="userage">Age(in years)</label>
          <input type="number" id="userage" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
export default UserInput;
