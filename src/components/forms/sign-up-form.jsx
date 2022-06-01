import React, { Component } from "react";
import axios from "axios";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("user[user.username]", this.state.username);
    formData.append("user[user.password]", this.state.password);

    return formData;
  }

  handleSubmit(event) {
    axios
      .post("http://127.0.0.1:5000/user/add", this.buildForm(), {
        withCredentials: true,
      })
      .then((response) => {
        this.props.handleSuccessfulFormSubmission(response.data);
        this.setState({
          username: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log("handleSubmit for sign up", error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="signUp-form-wrapper">
        <div className="tww-columns">
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            placeholder="Username"
            value={this.state.username}
          />
          <input
            type="text"
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
            value={this.state.password}
          />
        </div>

        <button className="btn">Sign up</button>
      </form>
    );
  }
}
