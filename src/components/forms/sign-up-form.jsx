import React, { useState } from "react";
import axios from "axios";

export default function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    axios
      .post("https://dost-thou-even-hoist-api.herokuapp.com/user/add", {
        username: username,
        password: password,
      })
      .then((response) => {
        props.handleSuccessfulFormSumbmisson(response.data);
      })
      .catch((error) => {
        console.log("handleSubmit for sign up", error);
      });

    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="signUp-form-wrapper">
      <div className="two-columns">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Username"
          value={username}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
          value={password}
        />
      </div>

      <button className="btn">Sign up</button>
    </form>
  );
}
