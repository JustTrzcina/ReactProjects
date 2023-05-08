import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </React.Fragment>
  );
};

export default Modal;
