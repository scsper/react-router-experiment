import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Teams from './components/teams'
import Team from './components/teams/team'
import Capsule from './components/capsule'
import './app.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Teams} />
        <Route path="/:teamId" exact component={Team} />
        <Route path="/:teamId/:capsuleId" exact component={Capsule} />
        <Route component={() => '404 Not Found'} />
      </Switch>
    </Router>
  )
}

export default App
