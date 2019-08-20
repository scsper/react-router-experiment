import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default function PageNav() {
  return (
    <div className="page-nav-container">
      <div className="page-nav-link">
        <Link to="/">Home</Link>
      </div>
      <div className="page-nav-link">
        <Link to="/docs">Docs</Link>
      </div>
      <div className="page-nav-link">
        <Link to="/teams">Teams</Link>
      </div>
    </div>
  )
}
