import React from "react";
import Modal from "react-modal";
import SendEmail from "./SendEmail";
import ChangePassword from "./ChangePassword";

import "./ForgotPassword.css";

Modal.setAppElement("#root");

class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="ModalContent">
        <p onClick={this.handleOpenModal}>Esqueceu né?</p>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <SendEmail />
          {/* <button onClick={this.handleCloseModal}>Close Modal</button> */}
        </Modal>
      </div>
    );
  }
}

export default ForgotPassword;