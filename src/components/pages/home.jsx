import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SignUpModal from "../Modals/sign-up-modal";
import LoginModal from "../Modals/login-modal";
import { useAppContext } from "../../context";

export default function Home() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
  const { setLoggedIn, loggedIn, logout, currentUser } = useAppContext();

  const handleSuccessfulLogin = () => {
    setLoggedIn(true);
    setLoginModalIsOpen(false);
  };

  const handleLoginModalClose = () => {
    setLoginModalIsOpen(false);
  };

  const handleLogin = () => {
    setLoginModalIsOpen(true);
  };

  const handleSuccessfulNewSignUp = () => {
    setSignUpModalIsOpen(false);
  };

  const handleSignUpModalClose = () => {
    setSignUpModalIsOpen(false);
  };

  const handleNewSignUpClick = () => {
    setSignUpModalIsOpen(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    logout();
    console.log("logged out");
  };

  useEffect(() => {
    console.log(currentUser);
    if (Cookies.get("username")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <div className="home-page">
      <div className="title home">
        <h1>Home</h1>
        <div
          className="btn-wrapper"
          style={{ visibility: loggedIn ? "hidden" : "visible" }}
        >
          <SignUpModal
            handleModalClose={handleSignUpModalClose}
            modalIsOpen={signUpModalIsOpen}
            handleSuccessfulNewSignUp={handleSuccessfulNewSignUp}
          />

          <button className="btn" onClick={handleNewSignUpClick}>
            Sign Up
          </button>
          <LoginModal
            handleModalClose={handleLoginModalClose}
            modalIsOpen={loginModalIsOpen}
            handleSuccessfulLogin={handleSuccessfulLogin}
          />
          <button className="btn" onClick={handleLogin}>
            Log In
          </button>
        </div>
        <div className="btn-wrapper">
          <button
            className="btn"
            style={{ visibility: loggedIn ? "visible" : "hidden" }}
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
