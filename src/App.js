import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Team from './components/team'
import './app.css'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Team} />
    </Router>
  )
}

export default App
