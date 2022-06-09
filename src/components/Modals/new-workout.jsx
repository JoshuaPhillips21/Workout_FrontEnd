import React, { Component } from "react";
import ReactModal from "react-modal";

import NewWorkoutForm from "../forms/new-workout-form";

ReactModal.setAppElement("#root");

export default class NewWorkoutModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "80vw",
      },
      overlay: {
        backgroundColor: "rgba(1,1,1,075)",
      },
    };

    this.handleSuccessfulFormSubmission =
      this.handleSuccessfulFormSubmission.bind(this);
  }

  handleSuccessfulFormSubmission(newWorkout) {
    this.props.handleSuccessfulNewWorkout(newWorkout);
  }

  render() {
    return (
      <ReactModal
        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleWorkoutModalClose();
        }}
        isOpen={this.props.workoutModalIsOpen}
      >
        <NewWorkoutForm
          handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
        />
      </ReactModal>
    );
  }
}
