import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/docs">Docs</Link>
      <Link to="/teams">Teams</Link>
    </div>
  )
}
