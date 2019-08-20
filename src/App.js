import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Teams from './components/teams'
import Team from './components/teams/team'
import Capsule from './components/capsule'
import Docs from './components/docs'
import './app.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/docs" exact component={Docs} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/teams/:teamId" exact component={Team} />
        <Route path="/teams/:teamId/:capsuleId" exact component={Capsule} />
        <Route component={() => '404 Not Found'} />
      </Switch>
    </Router>
  )
}

export default App
