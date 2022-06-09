import React from "react";
import { A } from "hookrouter";
import { useAppContext } from "../../context";
import { IoIosArrowDropdown } from "react-icons/io";

const NavigationComponent = ({ toggle }) => {
  const { loggedIn } = useAppContext();

  return (
    <div className="nav-wrapper">
      <IoIosArrowDropdown className="mobile-icon" onClick={toggle} />
      <div className="nav-link-wrapper">
        <A className="link" href="/">
          Home
        </A>
        <A className="link" href="/arms">
          Arms
        </A>
        <A className="link" href="/back">
          Back
        </A>
        <A className="link" href="/chest">
          Chest
        </A>
        <A className="link" href="/legs">
          Legs
        </A>
        <A
          className="link"
          href="/profile"
          style={{ visibility: loggedIn ? "visible" : "hidden" }}
        >
          Profile
        </A>
      </div>
    </div>
  );
};

export default NavigationComponent;
