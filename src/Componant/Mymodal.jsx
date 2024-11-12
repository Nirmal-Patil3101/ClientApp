import React from "react";
import { Modal } from "react-bootstrap";

const Mymodal = ({ isShow, onClose, message }) => {
  return (
    <>
      <Modal show={isShow} onHide={onClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => onClose()}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Mymodal;
