import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "./AlertModal.css";

export const AlertModal = (props) => {
  const {
    isShow,
    onClose,
    title,
    text,
    actionButtonTitle,
    actionUrl,
    message,
  } = props;

  const navigate = useNavigate();
  const [show, setShow] = useState(isShow);

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  const handleClose = () => {
    onClose(false);
  };

  const handleAction = () => {
    if (actionUrl) navigate(actionUrl);
    onClose(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      {/* <Modal.Header closeButton style={{ backgroud: "black" }}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <div className="text-white fs-4">{title}</div>
        <div className="d-flex justify-content-center text-white fs-5 mt-3">
          {message}
        </div>
        {text && (
          <div className="d-flex justify-content-center text-white fs-5 mt-1">
            {text}
          </div>
        )}
        <div className="d-flex justify-content-center mt-4">
          {actionButtonTitle && (
            <Button
              variant="link"
              className="mx-2"
              style={{ minWidth: 70, fontSize: 22 }}
              onClick={handleAction}
            >
              {actionButtonTitle}
            </Button>
          )}
          <Button
            variant="link"
            className="mx-2 text-white"
            style={{ minWidth: 70, fontSize: 20 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
