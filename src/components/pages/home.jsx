import React, { Component } from "react";
import SignUpModal from "../Modals/sign-up-modal";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpModalIsOpen: false,
    };

    this.handleNewSignUpClick = this.handleNewSignUpClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSuccessfulNewSignUp = this.handleSuccessfulNewSignUp.bind(this);
  }

  handleSuccessfulNewSignUp(singUp) {
    this.setState({
      signUpModalIsOpen: false,
    });
  }

  handleModalClose() {
    this.setState({
      signUpModalIsOpen: false,
    });
  }

  handleNewSignUpClick() {
    this.setState({
      signUpModalIsOpen: true,
    });
  }

  render() {
    return (
      <div className="home-page">
        <div className="title home">
          <h1>Home</h1>
          <div className="btn-wrapper">
            <SignUpModal
              handleModalClose={this.handleModalClose}
              modalIsOpen={this.state.signUpModalIsOpen}
            />

            <button className="btn" onClick={this.handleNewSignUpClick}>
              Sign Up
            </button>
            <button className="btn" type="submit">
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
