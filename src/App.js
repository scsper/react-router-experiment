import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Teams from './components/teams'
import Capsules from './components/capsules'
import './app.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Teams} />
        <Route path="/:teamId" exact component={Teams} />
        <Route path="/:teamId/:capsuleId" component={Capsules} />
        <Route component={() => '404 Not Found'} />
      </Switch>
    </Router>
  )
}

export default App
