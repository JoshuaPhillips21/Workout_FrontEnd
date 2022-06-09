import React from "react";
import { A } from "hookrouter";
import { useAppContext } from "../../context";
import { FaTimes } from "react-icons/fa";

export const Mobilemenu = ({ isOpen, toggle }) => {
  const { loggedIn } = useAppContext();
  return (
    <div
      className="mobile-link-wrapper"
      onClick={toggle}
      isOpen={isOpen}
      style={{ top: isOpen ? "0" : "-100%" }}
    >
      <div className="closeIcon" onClick={toggle}>
        <FaTimes style={{ color: "#d3af37", fontSize: "2em" }} />
      </div>
      <A className="link" href="/" onClick={toggle}>
        Home
      </A>
      <A className="link" href="/arms" onClick={toggle}>
        Arms
      </A>
      <A className="link" href="/back" onClick={toggle}>
        Back
      </A>
      <A className="link" href="/chest" onClick={toggle}>
        Chest
      </A>
      <A className="link" href="/legs" onClick={toggle}>
        Legs
      </A>
      <A
        className="link"
        href="/profile"
        style={{ visibility: loggedIn ? "visible" : "hidden" }}
        onClick={toggle}
      >
        Profile
      </A>
    </div>
  );
};
