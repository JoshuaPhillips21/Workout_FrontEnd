import React, { Component } from 'react'
import HomeImage from '../images/Vitruvian_Man.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="title home">
          <h1>Home</h1>
        </div>
        <div>
          <img src={HomeImage} alt="oh no" />
        </div>

        <div className="btn-wrapper">
          <button className="btn" type="submit">
            Sign Up
          </button>
          <button className="btn" type="submit">
            Log In
          </button>
        </div>
      </div>
    )
  }
}
