import React from 'react'
import { A } from 'hookrouter'
import axios from 'axios'
import { withRouter } from 'react-router'

const NavigationComponent = (props) => {
  const hanldeSignOut = () => {
    axios
      .delete('', { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push('/')
          props.handleSuccessfulLogout()
        }
        return response.data
      })
      .catch((error) => {
        console.log('error signing out', error)
      })
  }
  return (
    <div className="nav-wrapper">
      <div className="left-side">
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
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavigationComponent)
