import React, { Component } from "react";
import ReactModal from "react-modal";

import SignUpForm from "../forms/sign-up-form";

ReactModal.setAppElement("#root");

export default class SignUpModal extends Component {
  constructor(props) {
    super(props);

    this.custonStyles = {
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

  handleSuccessfulFormSumbmisson(signUp) {}

  render() {
    return (
      <ReactModal
        style={this.custonStyles}
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}
      >
        <SignUpForm
          handleSuccessfulFormSumbmisson={this.handleSuccessfulFormSumbmisson}
        />
      </ReactModal>
    );
  }
}
