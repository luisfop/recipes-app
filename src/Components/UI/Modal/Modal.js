import React from "react";
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

const Modal = ({ show, modalClosed, children }) => {
  return (
    <div>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateX(-100vh)",
          opacity: show ? "1" : 0
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
