import React, { useState } from "react";
import SignUp from "../forms/sign-up";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="home-page">
      <div className="title home">
        <h1>Home</h1>
        <div className="btn-wrapper">
          <button
            className="btn openModal"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Sign Up
          </button>
          {openModal && <SignUp closeModal={setOpenModal} />}
          <button className="btn" type="submit">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
