import React, { useState } from "react";
// import HomeImage from "../images/Vitruvian_Man.jpg";
import SignUp from "../forms/sign-up";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="home-page">
      <div className="title home">
        <h1>Home</h1>
      </div>
      {/* <div className="home-image">
        <img src={HomeImage} alt="oh no" />
      </div> */}

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
  );
}
