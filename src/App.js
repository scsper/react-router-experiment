import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Teams from './components/teams'
import './app.css'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Teams} />
      <Route path="/:teamId" component={Teams} />
    </Router>
  )
}

export default App
