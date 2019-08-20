import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function CapsuleNav({ match }) {
  return (
    <div className="capsule-nav-container">
      <div className="capsule-nav-link">
        <Link to={match.url + '/versions'}>Versions</Link>
      </div>

      <div className="capsule-nav-link">
        <Link to={match.url + '/configs-and-secrets'}>Configs and Secrets</Link>
      </div>
    </div>
  )
}
