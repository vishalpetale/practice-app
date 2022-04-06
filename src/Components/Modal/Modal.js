import React from "react";
import "./Modal.css";
import Button from "../UI/Button";

function Modal(props) {
  const handleModalClick = () => {
    props.onCloseModal();
  };

  return (
    <div>
      <div className="overlay" onClick={handleModalClick} />
      <div className="modal">
        <header>
          <h3 className="modal-title">{props.title}</h3>
        </header>
        <div>
          <p className="modal-msg">{props.message}</p>
        </div>
        <footer>
          <Button className="btn-modal" onClick={handleModalClick}>
            Okay
          </Button>
        </footer>
      </div>
    </div>
  );
}
export default Modal;
