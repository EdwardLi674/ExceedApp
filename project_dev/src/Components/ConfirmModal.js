import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./AlertModal.css";

export const ConfirmModal = (props) => {
  const { isShow, onClose, title, text } = props;

  const [show, setShow] = useState(isShow);

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  const handleClose = (val) => {
    onClose(val);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <div className="text-white fs-4">{title}</div>
        {text && (
          <div className="d-flex justify-content-center text-white fs-5 mt-1">
            {text}
          </div>
        )}
        <div className="d-flex justify-content-center mt-4">
          <Button
            variant="link"
            className="mx-2"
            style={{ minWidth: 70, fontSize: 22 }}
            onClick={() => handleClose("ok")}
          >
            Ok
          </Button>
          <Button
            variant="link"
            className="mx-2 text-white"
            style={{ minWidth: 70, fontSize: 20 }}
            onClick={() => handleClose("cancel")}
          >
            Cancel
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
