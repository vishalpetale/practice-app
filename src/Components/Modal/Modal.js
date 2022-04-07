import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Button from "../UI/Button";

function Modal(props) {
  const ModalOverlay = (props) => {
    return (
      <>
        <div className="overlay" onClick={props.onCloseModal} />
        <div className="modal">
          <header>
            <h3 className="modal-title">{props.title}</h3>
          </header>
          <div>
            <p className="modal-msg">{props.message}</p>
          </div>
          <footer>
            <Button className="btn-modal" onClick={props.onCloseModal}>
              Okay
            </Button>
          </footer>
        </div>
      </>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal-overlay")
      )}
    </>
  );
}
export default Modal;
