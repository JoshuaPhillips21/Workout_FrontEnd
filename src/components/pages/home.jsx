import React, { Component } from "react";
import SignUpModal from "../Modals/sign-up-modal";
import LoginModal from "../Modals/login-modal";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpModalIsOpen: false,
      loginModalIsOpen: false,
    };

    this.handleNewSignUpClick = this.handleNewSignUpClick.bind(this);
    this.handleSignUpModalClose = this.handleSignUpModalClose.bind(this);
    this.handleSuccessfulNewSignUp = this.handleSuccessfulNewSignUp.bind(this);
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginModalClose = this.handleLoginModalClose.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loginModalIsOpen: false,
    });
  }

  handleLoginModalClose() {
    this.setState({
      loginModalIsOpen: false,
    });
  }

  handleLogin() {
    this.setState({
      loginModalIsOpen: true,
    });
  }

  handleSuccessfulNewSignUp() {
    this.setState({
      signUpModalIsOpen: false,
    });
  }

  handleSignUpModalClose() {
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
              handleModalClose={this.handleSignUpModalClose}
              modalIsOpen={this.state.signUpModalIsOpen}
              handleSuccessfulNewSignUp={this.handleSuccessfulNewSignUp}
            />

            <button className="btn" onClick={this.handleNewSignUpClick}>
              Sign Up
            </button>
            <LoginModal
              handleModalClose={this.handleLoginModalClose}
              modalIsOpen={this.state.loginModalIsOpen}
              handleSuccessfulLogin={this.handleSuccessfulLogin}
            />
            <button className="btn" onClick={this.handleLogin}>
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
