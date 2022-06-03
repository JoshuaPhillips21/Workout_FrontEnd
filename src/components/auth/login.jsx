import React, { useState, useEffect } from "react";
import { navigate } from "hookrouter";
import Cookies from "js-cookie";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError(true);
      setErrorMesssage("Error: All fields must be completed.");
    } else {
      fetch("http://127.0.0.1:5000/user/authenticate", {
        method: "POST",
        header: {
          "content-type": "application/json",
        },

        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "User NOT verified") {
            setError(true);
            setErrorMesssage("Error: User NOT verified.");
          } else {
            setError(false);
            setErrorMesssage("");
            Cookies.set("username", username);
            navigate("/");
            props.handleSuccessfulFormSumbmisson();
          }
        })
        .catch((error) => {
          setError(true);
          setErrorMesssage("Error with logging in, please try again", error);
          console.log("Error with logging in, please try again", error);
        });
    }
  };

  useEffect(() => {
    setError(false);
    setErrorMesssage("");
  }, [username, password]);

  return (
    <div className="login-container">
      <form className="login-form-wrapper" onSubmit={handleSubmit}>
        <div className="two-columns">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="Username"
            value={username}
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            value={password}
          />
        </div>

        <button className="btn" type="submit">
          Log In
        </button>
      </form>
      <h3 style={{ visibility: error ? "visible" : "hidden" }}>
        {errorMessage}
      </h3>
    </div>
  );
}
