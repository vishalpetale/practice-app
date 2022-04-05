import React from "react";
import "./Modal.css";
import Button from "../UI/Button";

function Modal(props) {
  const handleModalClick = () => {
    props.onChangeModal(false);
  };

  return (
    <div>
      <div
        className={`overlay ${props.modalOpen || "hidden"}`}
        onClick={handleModalClick}
      />
      <div className={`modal ${props.modalOpen || "hidden"}`}>
        <h3 className="modal-title">Invalid Input</h3>
        <p className="modal-msg">{props.msg}</p>
        <Button className="btn-modal" onClick={handleModalClick}>
          Okay
        </Button>
      </div>
    </div>
  );
}
export default Modal;
