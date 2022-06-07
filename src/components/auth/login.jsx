import React, { useState, useEffect } from "react";
import { navigate } from "hookrouter";
import Cookies from "js-cookie";
import { useAppContext } from "../../context";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  const { login } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError(true);
      setErrorMesssage("Error: All fields must be completed.");
    } else {
      fetch("http://127.0.0.1:5000/user/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: username,
          password: password,
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
            window.localStorage.setItem("user", JSON.stringify(res.id));
            navigate("/");
            props.handleSuccessfulFormSumbmisson();
          }
        })
        .then(() => {
          login();
        })
        .catch((error) => {
          setError(true);
          setErrorMesssage("Error with logging in, please try again", error);
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
