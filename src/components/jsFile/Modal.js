import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../cssFile/Modal.css'

const ModalComp = (props) => {
  const initModal = () => {
    return props.setShow(false);
  };

  return (
    <>
      {/* <Button variant="success">Open Modal</Button> */}

      <Modal
        show={props.show}
        onHide={initModal}
        aria-labelledby="ModalHeader"
        centered
      >
        <Modal.Header closeButton onClick={initModal}>
        <p1 >Connect with Aakash Metal Works</p1>
        </Modal.Header>
        <Modal.Body>
          <div className="bodyContainer">
            <label htmlFor="contactNo">
              Mobile Number<span style={{ color: "red" }}>*</span>
            </label><br />
            <input className="mobInput" type="tel" id="contactNo" required placeholder="Enter Your Mobile No"/> <br />
            <p className="note" >We will contact you on this number</p>
            <textarea name="message" id="message" cols="43" rows="2" placeholder='Describe your requirement in detail...'></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={initModal}>
            Submit Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComp;
