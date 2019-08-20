import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default function TeamNav({ match }) {
  return (
    <div className="team-nav-container">
      <div className="team-nav-link">
        <Link to={match.url + '/capsules'}>Capsules</Link>
      </div>
      <div className="team-nav-link">
        <Link to={match.url + '/people'}>People</Link>
      </div>
      <div className="team-nav-link">
        <Link to={match.url + '/info'}>Team Info</Link>
      </div>
    </div>
  )
}
