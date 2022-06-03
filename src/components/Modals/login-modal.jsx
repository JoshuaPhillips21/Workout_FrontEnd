import React, { Component } from "react";
import ReactModal from "react-modal";

import Login from "../auth/login";

ReactModal.setAppElement("#root");

export default class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
      },
      overlay: {
        backgroundColor: "rgba(1,1,1,075)",
      },
    };

    this.handleSuccessfulFormSumbmisson =
      this.handleSuccessfulFormSumbmisson.bind(this);
  }

  handleSuccessfulFormSumbmisson(login) {
    this.props.handleSuccessfulLogin(login);
    console.log("submitted");
  }

  render() {
    return (
      <ReactModal
        handleSuccessfulFormSumbmisson={this.handleSuccessfulFormSumbmisson}
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}
      >
        <Login
          handleSuccessfulFormSumbmisson={this.handleSuccessfulFormSumbmisson}
        />
      </ReactModal>
    );
  }
}
