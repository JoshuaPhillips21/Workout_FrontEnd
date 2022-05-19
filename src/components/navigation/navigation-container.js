import React from 'react'
import { A } from 'hookrouter'
import { withRouter } from 'react-router'

const NavigationComponent = (props) => {
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
