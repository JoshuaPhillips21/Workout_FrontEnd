import React, { useState } from "react";

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/user/add", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error creating account", err);
      });
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
          type="text"
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
