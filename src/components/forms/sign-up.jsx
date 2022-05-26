import React from "react";

function SignUp({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="close-button">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Create account</h1>
        </div>
        <div className="body">
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="password" name="password" />
        </div>
        <div className="modal-buttons">
          <button type="submit" onClick={() => closeModal(false)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
